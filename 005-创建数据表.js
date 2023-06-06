/*
 * @Date: 2023-06-06 19:32:56
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:33:12
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\005-创建数据表.js
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

// 创建数据表
const createTableSql = `
  CREATE TABLE IF NOT EXISTS prices (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '物品ID',
    name VARCHAR(255) NOT NULL COMMENT '名称',
    prices INT NOT NULL COMMENT '单价',
    create_by VARCHAR(255) COMMENT '创建者',
    update_by VARCHAR(255) NOT NULL COMMENT '更新者',
    create_time DATE COMMENT '创建时间',
    update_time DATE COMMENT '更新时间'
  )CHARSET=utf8;
`;
db.query(createTableSql, (error, result) => { 
  if (error) throw error;
  console.log('table created successfully');
})