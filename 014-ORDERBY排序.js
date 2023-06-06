/*
 * @Date: 2023-06-06 19:37:07
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:37:20
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\014-ORDERBY排序.js
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
 * SELECT field1, field2,...fieldN
 * FROM table_name1, table_name2...
 * ORDER BY
 * field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]
 * 
 * 解释：
 * 可以设定多个字段来排序
 * ASC 或 DESC 关键字来设置查询结果是按升序或降序，默认升序
 * 可以添加 WHERE...LIKE 子句来设置条件
 */

// 排序
const orderBySql = `SELECT * FROM goods ORDER BY numbers`
db.query(orderBySql, (error, result) => { 
  if (error) throw error;
  console.log('查询结果:', result);
})

db.end();