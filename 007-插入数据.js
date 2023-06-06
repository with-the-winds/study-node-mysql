/*
 * @Date: 2023-06-06 19:33:45
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:34:03
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\007-插入数据.js
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
  console.log('mysql connected ...');
})

// 插入数据
// 1.使用 INSERT INTO  table_name ( field1, field2,...fieldN ) VALUES ( value1, value2,...valueN ); 方式插入
const insertSql1 = `
  INSERT INTO goods (name, numbers, create_by, update_by, create_time, update_time)
  VALUES
    ('苹果', 10, 'root', 'root', CURDATE(), CURDATE()),
    ('橘子', 20, 'root', 'root', CURDATE(), CURDATE()),
    ('香蕉', 15, 'root', 'root', CURDATE(), CURDATE())
`;

db.query(insertSql1, (err, result) => { 
  if (err) throw err;
  console.log('insertSql1 插入成功 ...');
})

// 2.使用参数化查询方式插入数据
const insertSql2 = `
  INSERT INTO goods (name, numbers, create_by, update_by, create_time, update_time)
  VALUES 
    (?, 33, ?, ?, CURDATE(), CURDATE()),
    (?, 33, ?, ?, CURDATE(), CURDATE()),
    (?, 33, ?, ?, CURDATE(), CURDATE()),
    (?, 33, ?, ?, CURDATE(), CURDATE())
`
const data = [
  '葡萄', 'root', 'root',
  '西瓜', 'root', 'root',
  '梨', 'root', 'root',
  '菠萝', 'root', 'root'
]

db.query(insertSql2, data, (err, result) => { 
  if (err) throw err;
  console.log('insertSql2 插入成功 ...');
})

// 注意实际场景应该需要把 insertSql2 根据 data 进行循环拼接，而不是多次使用INSERT语句