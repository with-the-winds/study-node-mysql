/*
 * @Date: 2023-06-06 19:38:03
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:38:20
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\016.连接的使用.js
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
 * SELECT, UPDATE 和 DELETE 语句中使用 Mysql 的 JOIN 来联合多表查询
 * JOIN 按照功能大致分为如下三类：
 * INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录
 * LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录
 * RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录
 * 注意：INNER JOIN(也可以省略 INNER 使用 JOIN，效果一样)
 */

// JOIN
const joinSql = `
  SELECT goods.name, goods.numbers, prices.prices
  FROM goods JOIN prices ON goods.name = prices.name;
`
db.query(joinSql, (error, result) => { 
  if (error) throw error;
  console.log('查询结果：', result);
})

// JOIN 等同于 WHERE 子句
const joinWhereSql = `
  SELECT goods.name, goods.numbers, prices.prices
  FROM goods, prices
  WHERE goods.name = prices.name;
`
db.query(joinSql, (error, result) => { 
  if (error) throw error;
  console.log('where查询结果：', result);
})

// LEFT JOIN(goods为左,prices为右)
const leftJoinSql = `
  SELECT goods.name, goods.numbers, prices.prices
  FROM goods LEFT JOIN prices
  ON goods.name = prices.name;
`
db.query(leftJoinSql, (error, result) => { 
  if (error) throw error;
  console.log('left join 查询结果：', result);
})

// RIGHT join(prices为右,goods为左)
const rightJoinSql = `
  SELECT goods.name, goods.numbers, prices.prices
  FROM goods RIGHT JOIN prices
  ON goods.name = prices.name;
`
db.query(rightJoinSql, (error, result) => { 
  if (error) throw error;
  console.log('right join 查询结果：', result);
})