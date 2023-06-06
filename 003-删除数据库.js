/*
 * @Date: 2023-06-06 17:22:01
 * @LastEditors: zhubj
 * @LastEditTime: 2023-06-06 17:23:24
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\003-删除数据库.js
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

// 删除数据库
let sql = 'drop database nodemysql1'
db.query(sql, (err, result) => { 
  if (err) throw err;
  console.log(result);
  console.log('Database droped .....');
})