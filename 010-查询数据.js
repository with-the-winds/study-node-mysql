/*
 * @Date: 2023-06-06 19:35:36
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:35:51
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\010-查询数据.js
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

// 查询数据
/**
 * 语法： 
 * SELECT column_name, column_name 
 * FROM table_name
 * [WHERE Clause]
 * [LIMIT N] [OFFSET M]
 * 解释：
 * Clause 是条件，可以通过对应条件查询
 * LIMIT 是返回设定的记录数
 * OFFSET 是开始查询的数据偏移量，默认为0
 */
const querySql = 'SELECT * FROM goods'

db.query(querySql, (err, results) => { 
  if (err) throw err;
  console.log('查询结果为：', results);
})