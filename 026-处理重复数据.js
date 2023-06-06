/*
 * @Date: 2023-06-06 19:41:38
 * @LastEditors: with-the-winds
 * @LastEditTime: 2023-06-06 19:41:53
 * @Description: 头部注释
 * @FilePath: \study-node-mysql\026-处理重复数据.js
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
 * 描述：防止表中出现重复数据
 * 设置指定的字段为 PRIMARY KEY (主键) 或 UNIQUE (唯一) 索引来保证数据的唯一
 */

// 创建数据表，设置一个主键和一个唯一值
const createTableSql = `CREATE TABLE IF NOT EXISTS sale (
  id INT NOT NULL COMMENT '物品id',
  name VARCHAR(255) UNIQUE COMMENT '名称',
  prices INT COMMENT '物品单价',
  create_by VARCHAR(255) COMMENT '创建者',
  update_by VARCHAR(255) COMMENT '更新者',
  PRIMARY KEY (id)
)CHARSET=utf8;`

db.query(createTableSql, (error, result) => { 
  if (error) throw error;
  console.log('创建sable表成功', result);
})

// 插入数据测试，重复值应该会报错 INSERT INTO 和 INSERT IGNORE INTO 的区别
// INSERT IGNORE INTO 会忽略数据库中存在的数据,如果存在则跳过，不存在则插入
const addDataSql = `INSERT INTO sale (id, name, prices, create_by, update_by)
VALUES
(1, '西瓜', 2, 'root', 'root'),
(2, '苹果', 2, 'root', 'root'),
(3, '梨', 2, 'root', 'root');
`
// db.query(addDataSql, (error, result) => { 
//   if (error) throw error;
//   console.log('INSERT INTO 插入数据', result);
// })

const addDataSql2 = `
  INSERT IGNORE INTO sale
  (id, name, prices, create_by, update_by)
  VALUES
  (4, '西瓜', 3, 'root', 'root'),
  (5, '西瓜', 5, 'root', 'root'),
  (6, '水蜜桃', 3, 'root', 'root'),
  (7, '葡萄', 4, 'root', 'root'),
  (8, '芒果', 3, 'root', 'root'),
  (9, '芒果', 2, 'root', 'root');
`
// db.query(addDataSql2, (error, result) => { 
//   if (error) throw error;
//   console.log('插入数据成功', result);
// })

// 统计重复数据
const repeatSql = `SELECT COUNT(*) as repetitions, prices FROM sale
GROUP BY prices HAVING repetitions > 1;`
db.query(repeatSql, (error, result) => { 
  if (error) throw error;
  console.log('统计重复数据', result);
})

// 过滤重复数据
const unrepeatSql = `SELECT DISTINCT prices FROM sale`
db.query(unrepeatSql, (error, result) => { 
  if (error) throw error;
  console.log('查看不重复的数据', result);
})