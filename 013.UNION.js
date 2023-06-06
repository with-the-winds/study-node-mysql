/*
 * @Date: 2023-06-06 19:36:37
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:36:51
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\013.UNION.js
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
 * 描述：
 * UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中
 * 多个 SELECT 语句会删除重复的数据
 * 
 * 语法：
 * SELECT expression1, expression2, ... expression_n
 * FROM tables
 * [WHERE conditions]
 * UNION [ALL | DISTINCT]
 * SELECT expression1, expression2, ... expression_n
 * FROM tables
 * [WHERE conditions];
 * 
 * 参数：
 * expression1, expression2, ... expression_n: 要检索的列
 * DISTINCT: 可选，删除结果集中重复的数据
 * 默认情况下 UNION 操作符已经删除了重复数据，所以 DISTINCT 修饰符对结果没啥影响
 * ALL: 可选，返回所有结果集，包含重复数据
 */

// UNION
const unionSql = `
  SELECT name FROM goods
  UNION
  SELECT name FROM prices
  ORDER BY name;
`
db.query(unionSql, (err, result) => { 
  if (err) throw err;
  console.log('查询结果：', result)
})

db.end();