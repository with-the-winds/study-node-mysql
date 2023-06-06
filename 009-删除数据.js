/*
 * @Date: 2023-06-06 19:35:16
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:35:31
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\009-删除数据.js
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

// 删除数据
/**
 * 语法： 
 * DELETE FROM table_name [WHERE Clause]
 * 解释：
 * Clause 是条件，可以通过对应条件查询,没有指定WHERE语句则表中所有记录被删除
 */
const deleteSql = `DELETE FROM goods WHERE name = '梨'`

db.query(deleteSql, (error, result) => { 
  if (error) throw error;
  console.log('DELETE successful!');
})

// 关闭数据库连接
db.end();