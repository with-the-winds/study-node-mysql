/*
 * @Date: 2023-06-06 19:40:38
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:40:49
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\023-复制表.js
 */
const mysql = require('mysql')

// 创建连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'nodemysql2'
})

// 连接数据库
db.connect(err => { 
  if (err) throw err;
  console.log('mysql connected ......');
})

// 复制表(获取创建数据表语句)
const checkSql = 'SHOW CREATE TABLE prices'
db.query(checkSql, (error, result) => { 
  if (error) throw error;
  console.log(result);
})

const cloneSql = `
  CREATE TABLE clone_prices (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) DEFAULT NULL COMMENT '名称',
    numbers int DEFAULT NULL COMMENT '数量',
    prices int DEFAULT NULL COMMENT '单价',
    create_time datetime DEFAULT NULL COMMENT '创建时间',
    update_time datetime DEFAULT NULL COMMENT '更新时间',
    create_by varchar(255) DEFAULT NULL COMMENT '创建者',
    update_by varchar(255) DEFAULT NULL COMMENT '更新者',
    d int DEFAULT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
`
// 创建表
db.query(cloneSql, (error, result) => { 
  if (error) throw error;
  console.log('创建表成功', result);
})

// 拷贝数据表的数据
const copyData = `INSERT INTO clone_prices (
  name, numbers, prices, create_time, update_time, create_by, update_by
) SELECT name, numbers, prices, create_time, update_time, create_by, update_by
FROM prices;`

db.query(copyData, (error, result) => { 
  if (error) throw error;
  console.log('拷贝数据表数据成功', result);
})

db.end()