/*
 * @Date: 2023-06-06 17:14:53
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-06 17:15:05
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\002-连接数据库.js
 */
// 获取mysql数据库模块
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