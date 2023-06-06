/*
 * @Date: 2023-06-06 19:40:54
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:41:10
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\024-元数据.js
 */
const mysql = require('mysql')

// 创建连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'nodemysql2'
})

// 连接数据库
db.connect(err => { 
  if (err) throw err;
  console.log('mysql connected ......');
})

// 获取查询语句影响的记录数（SELECT, UPDATE, DELETE）
const selectSql = `UPDATE prices SET create_by = 'root2' WHERE create_by = 'root'`
db.query(selectSql, (error, result) => { 
  if (error) throw error;
  console.log('查询语句影响的记录数',result);
})

// 查看数据表列表
const showSqlList = `SHOW TABLES`
db.query(showSqlList, (error, result) => { 
  if (error) throw error;
  console.log('查看数据表列表', result);
})

// 获取服务器元数据
/**
 * SELECT VERSION() 服务器版本信息
 * SELECT DATABASE() 当前数据库名（或者返回空）
 * SELECT USER() 当前用户名
 * SHOW STATUS 服务器状态
 * SHOW VARIABLES 服务器配置变量
 */

// SELECT VERSION() 服务器版本信息
const selectVersionSql = `SELECT VERSION()`
db.query(selectVersionSql, (error, result) => { 
  if (error) throw error;
  console.log('查看服务器版本', result);
})

// SELECT DATABASE() 当前数据库名（或者返回空）
const selectDatabaseSql = `SELECT DATABASE()`
db.query(selectDatabaseSql, (error, result) => { 
  if (error) throw error;
  console.log('当前数据库名（或者返回空）', result);
})

// SELECT USER() 当前用户名
const selectUserSql = 'SELECT USER()'
db.query(selectUserSql, (error, result) => { 
  if (error) throw error;
  console.log('当前用户名', result );
})

// SHOW STATUS 服务器状态
const showStatusSql = `SHOW STATUS`
db.query(showStatusSql, (error, result) => { 
  if (error) throw error;
  console.log('服务器状态', result);
})

// SHOW VARIABLES 服务器配置变量
const showVariablesSql = `SHOW VARIABLES`
db.query(showVariablesSql, (error, result) => { 
  if (error) throw error;
  console.log('服务器配置变量', result);
})
db.end()