/*
 * @Date: 2023-06-06 19:32:31
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:32:47
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\004-选择数据库.js
 */
const mysql = require('mysql')

// 创建连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123'
})

// 连接数据库
db.connect(err => { 
  if (err) throw err;
  console.log('mysql connected ......');
})

// 创建多个数据库，方便数据库查看
const databases = ['nodemysql1', 'nodemysql2', 'nodemysql3']
databases.forEach(item => { 
  const createDatabaseSql = `CREATE DATABASE ${item}`
  db.query(createDatabaseSql, (error, result) => { 
    if (error) throw error;
    console.log(`Database ${item} created successfully`);
  })
})

// 查看数据库列表
const showDatabaseSql = 'SHOW DATABASES'
db.query(showDatabaseSql, (error, result) => { 
  if (error) throw error;
  console.log('List of databasets:');
  result.forEach(item => { 
    console.log(item.Database);
  })
})

// 选择要使用的数据库
const useDatabaseSql = 'USE nodemysql1'
db.query(useDatabaseSql, (error, result) => { 
  if (error) throw error;
  console.log('Database selected successfully');
})