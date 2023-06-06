/*
 * @Date: 2023-06-06 19:33:24
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:33:36
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\006-删除数据表.js
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

// 删除数据表
const deleteTableSql = 'DROP TABLE goods'
db.query(deleteTableSql, (error, result) => { 
  if (error) throw error;
  console.log('delete table successfully!');
})