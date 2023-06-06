/*
 * @Date: 2023-06-06 19:38:51
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:39:01
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\018-正则表达式.js
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

// 正则表达式，匹配 橘 开头
const selectSql = `SELECT * FROM goods WHERE name REGEXP '^橘'`
db.query(selectSql, (error, result) => { 
  if (error) throw error;
  console.log('查询的数据:', result);
})

db.end()