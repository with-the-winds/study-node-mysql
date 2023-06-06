/*
 * @Date: 2023-06-06 19:35:57
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:36:10
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\011-WHERE子局.js
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
 * SELECT field1, field2, ... FROM table_name1, table_name2 ...
 * [WHERE condition1 [AND [OR]] condition2]
 * 解释：
 * 查询语句中可以使用一个或者多个表，表之间使用逗号, 分割，并使用WHERE语句来设定查询条件
 * 可以在 WHERE 子句中指定任何条件
 * 可以使用 AND 或者 OR 指定一个或多个条件
 * WHERE 子句也可以运用于 SQL 的 DELETE 或者 UPDATE 命令
 * WHERE 子句类似于程序语言中的 if 条件，根据 MySQL 表中的字段值来读取指定的数据
 */

// MySQL 的 WHERE 子句的字符串比较是不区分大小写的
// 可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的

const selectSql = `SELECT * FROM goods WHERE BINARY name = '西瓜'`;
db.query(selectSql, (error, result) => { 
  if (error) throw error;
  console.log('查询结果为：', result);
})

db.end();