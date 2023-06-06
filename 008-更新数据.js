/*
 * @Date: 2023-06-06 19:34:12
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:34:23
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\008-更新数据.js
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

// 更新数据
/**
 * 语法： 
 * UPDATE table_name
 * SET field1=new-value1, field2=new-value2
 * [WHERE Clause]
 * 解释：
 * Clause 是条件，可以通过对应条件查询
 */

const updateSql = `
  UPDATE goods
  SET numbers = 100, update_by = 'root2'
  WHERE name = '苹果'
`
db.query(updateSql, (error, result) => { 
  if (error) { 
    console.error('Error update data:', error);
    return;
  }
  console.log('update successfully!');
})