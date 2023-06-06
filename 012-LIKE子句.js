/*
 * @Date: 2023-06-06 19:36:18
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:36:31
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\012-LIKE子句.js
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
 * SELECT field1, field2, ...
 * FROM table_name
 * WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'
 * 解释：
 * LIKE 子句中使用百分号 %字符来表示任意字符，类似于UNIX或正则表达式中的星号 *
 * 如果没有使用百分号 %, LIKE 子句与等号 = 的效果是一样的
 */

const selectSql = `SELECT * FROM goods WHERE name LIKE '%子' OR numbers = 15`

db.query(selectSql, (error, results) => { 
  if (error) throw error;
  console.log('selected successfully !');
  console.log(results);
})

db.end();

/**
 * 符号说明：
 * %, _, [], [^]
 * %a 以a结尾的数据
 * a% 以a开头的数据
 * %a% 含有a的数据
 * _a_ 三位且中间字母是a的
 * _a 两位且结尾字母是a的
 * a_ 两位且开头字母是a的
 */