/*
 * @Date: 2023-06-06 19:39:05
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:39:23
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\019-事务.js
 */
const mysql = require('mysql')

// 创建连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'nodemysql1'
})

// 连接数据库
db.connect(err => { 
  if (err) throw err;
  console.log('mysql connected ......');
})

// 开始事务
db.beginTransaction(err => { 
  if (err) { 
    console.error('Error starting transaction:', err);
    connection.end();
    return;
  }
  console.log('开始执行事务操作...');
})

// 插入数据操作
const insertData = `
  INSERT INTO goods (name, numbers, create_by, update_by, create_time, update_time)
  VALUES
    ('香瓜子', 10, 'root', 'root', CURDATE(), CURDATE()),
    ('西瓜子', 20, 'root', 'root', CURDATE(), CURDATE()),
    ('葵花子', 15, 'root', 'root', CURDATE(), CURDATE())
`
db.query(insertData, {multi: true}, (err, result) => { 
  if (err) { 
    db.rollback(() => { 
      console.error('Error inserting data:', err);
      db.end();
    })
    return;
  }
  
  // 根据插入生成的ID进行修改name操作
  console.log('插入成功！...', result);
  const updateSql = `UPDATE goods SET name = '南瓜子' WHERE id = ${result.insertId}`
  db.query(updateSql, (err) => { 
    if (err) { 
      db.rollback(() => {
        console.error('Error updating data:', err);
        db.end();
      });
      return;
    }
    console.log('更新成功！...');
    // 提交事务
    db.commit((err) => { 
      if (err) {
        db.rollback(() => {
          console.error('Error committing transaction:', err);
          db.end();
        });
        return;
      }

      console.log('提交事务成功...');
      db.end();
    })
  })
})