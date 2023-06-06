/*
 * @Date: 2023-06-06 19:41:16
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:41:32
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\025-序列使用.js
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

// 使用 AUTO_INCREMENT 定义序列自增
const createTableSql = `
  CREATE TABLE IF NOT EXISTS goods (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '物品id',
    name VARCHAR(255) NOT NULL COMMENT '物品名称',
    prices INT COMMENT '物品单价',
    create_by VARCHAR(255) COMMENT '创建者',
    update_by VARCHAR(255) COMMENT '更新者',
    create_time DATE COMMENT '创建时间',
    update_time DATE COMMENT '更新时间'
  )CHARSET=utf8;
`
db.query(createTableSql, (error, result) => { 
  if (error) throw error;
  console.log(result);
})

// 插入数据
const addDataSql = `
  INSERT INTO goods
  (name, prices, create_by, update_by, create_time, update_time)
  VALUES
  ('西瓜', 20, 'root', 'root', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('石榴', 10, 'root', 'root', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
  ('黄瓜', 15, 'root', 'root', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())
`
db.query(addDataSql, (error, result) => { 
  if (error) throw error;
  console.log(result);
})

// 重置序列(如果删除多条记录后进行重新排列,可以先删除自增额列，然后重新添加来实现)
const deleteSql = `DELETE FROM goods WHERE name = '西瓜'`
db.query(deleteSql, (error, result) => { 
  if (error) throw error;
  console.log('删除成功', result);
})

// 删除id列
const dropIdSql = `ALTER TABLE goods DROP id`
db.query(dropIdSql, (error, result) => { 
  if (error) throw error;
  console.log('删除id列成功', result);
})

// 重新添加id列
const addIdSql = `ALTER TABLE goods ADD id INT PRIMARY KEY AUTO_INCREMENT;`
db.query(addIdSql, (error, result) => { 
  if (error) throw error;
  console.log('重新添加id列', result);
})

db.end()