/*
 * @Date: 2023-06-06 17:01:50
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-06 19:22:46
 * @Description: 头部注释
 * @FilePath: \study-project\study-node-mysql\001-创建数据库.js
 */

const mysql = require('mysql')

// 创建连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123'
})

// 连接数据库
db.connect(err => { 
  if (err) throw err;
  console.log('mysql connected ......');
})

// 创建数据库
let sql = 'CREATE DATABASE nodemysql1'
db.query(sql, (err, result) => { 
  if (err) throw err;
  console.log(result);
  console.log('Database created .....');
})