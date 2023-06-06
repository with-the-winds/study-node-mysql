/*
 * @Date: 2023-06-06 19:39:55
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:40:05
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\021-索引.js
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

// 创建索引
// 1.创建索引，最基本的索引
const createIndexSql = `CREATE INDEX indexName ON sale id`
db.query(createIndexSql, (error, result) => { 
  if (error) throw error;
  console.log('创建索引成功', result);
})
