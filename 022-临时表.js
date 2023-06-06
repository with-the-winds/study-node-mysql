/*
 * @Date: 2023-06-06 19:40:12
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:40:28
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\022-临时表.js
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
 * 描述：
 * 临时表只在当前连接可见，当关闭连接时，Mysql会自动删除表并释放所有空间
 */

// 创建临时表
const createTempTableSql = `CREATE TEMPORARY TABLE temp_prices (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL COMMENT '名称',
  numbers int DEFAULT NULL COMMENT '数量',
  prices int DEFAULT NULL COMMENT '单价',
  create_time datetime DEFAULT NULL COMMENT '创建时间',
  update_time datetime DEFAULT NULL COMMENT '更新时间',
  create_by varchar(255) DEFAULT NULL COMMENT '创建者',
  update_by varchar(255) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (id)
)`

db.query(createTempTableSql, (error, result) => { 
  if (error) throw error;
  console.log('创建临时表成功', result);
})

// 给临时表插入数据
const addDataSql = `INSERT INTO temp_prices
(name, numbers, prices, create_time, update_time, create_by, update_by)
VALUES
('西瓜', 200, 2, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'root', 'root')`

db.query(addDataSql, (error, result) => { 
  if (error) throw error;
  console.log('插入数据成功', result);
})

// 查看所有数据表，验证临时表不会被看到
const listTablesSql = `SHOW TABLES`
db.query(listTablesSql, (error, result) => { 
  if (error) throw error;
  console.log('查看列表', result);
})

// 查看临时表的数据
const checkSql = `SELECT * FROM temp_prices`

db.query(checkSql, (error, result) => { 
  if (error) throw error;
  console.log('查看临时表的数据', result);
})

// 主动删除临时表（连接关闭的时候临时表也会被释放资源）
const deleteTableSql = `DROP TABLE temp_prices`
db.query(deleteTableSql, (error, result) => { 
  if (error) throw error;
  console.log('已经删除临时表', result);
})

// 再查看临时表的数据（验证临时表是否已经被删除）
db.query(checkSql, (error, result) => { 
  if (error) throw error;
  console.log(result);
})