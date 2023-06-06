/*
 * @Date: 2023-06-06 19:39:33
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:39:47
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\020-ALTER命令.js
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

/**
 * 描述：当需要修改数据表名或者修改数据表字段时，就需要使用到MySQL ALTER命令
 */

// 删除表字段
const deleteSql = `ALTER TABLE goods DROP i`
db.query(deleteSql, (error, result) => {
  if (error) throw error;
  console.log('删除表字段成功', result);
})

// 新增表字段
const addSql = `ALTER TABLE goods ADD i INT`
db.query(addSql, (error, result) => {
  if (error) throw error;
  console.log('新增表字段成功', result);
})

// 修改表字段(名称和类型  MODIFY CHANGE)
const updateSql = `ALTER TABLE goods CHANGE i d INT`
db.query(updateSql, (error, result) => { 
  if (error) throw error;
  console.log('修改表字段成功', result);
})

// 修改表名
const updateTableName = `ALTER TABLE goods RENAME TO prices`
db.query(updateTableName, (error, result) => { 
  if (error) throw error;
  console.log(result);
})