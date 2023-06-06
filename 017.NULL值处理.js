/*
 * @Date: 2023-06-06 19:38:28
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:38:40
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\017.NULL值处理.js
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

/**
 * 语法：
 * IS NULL: 当列的值是 NULL,此运算符返回 true
 * IS NOT NULL: 当列的值不为 NULL, 运算符返回 true
 * <=>: 比较操作符（不同于 = 运算符），当比较的的两个值相等或者都为 NULL 时返回 true
 */

const selectNullSql = `SELECT * FROM goods WHERE create_time IS NULL;`

db.query(selectNullSql, (error, result) => { 
  if (error) throw error;
  console.log('查询的数据:', result);
})

db.end()