/*
 * @Date: 2023-06-06 19:37:39
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:37:53
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\015-GROUPBY分组.js
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
 * GROUP BY 语句根据一个或多个列对结果集进行分组
 * 在分组的列上我们可以使用 COUNT, SUM, AVG,等函数
 * 
 * 语法：
 * SELECT column_name, function(column_name)
 * FROM table_name
 * WHERE column_name operator value
 * GROUP BY column_name;
 */

// 分组
const groupBySql = `
  SELECT name, COUNT(*) FROM goods Group BY name;
`
db.query(groupBySql, (error, result) => { 
  if (error) throw error;
  console.log('查询结果:', result);
})

// 使用 WITH ROLLUP 分组的基础上再统计
// 可以使用 coalesce 来设置一个可以取代 NUll 的名称
const groupBySql2 = `
  SELECT coalesce(name, '总数'), SUM(numbers) as total_numbers
  FROM goods
  GROUP BY name WITH ROLLUP
`
db.query(groupBySql2, (error, result) => { 
  if (error) throw error;
  console.log('查询结果:', result);
})
db.end()