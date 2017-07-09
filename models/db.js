/*
 * @Author: accord
 * @FileName: db.js 						   
 * @Date:   2017-07-09 22:33:25 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-07-09 23:30:06 	   
 */

'use strict';

/**
 * 数据库操作模块
 */

import mysql from 'mysql';
import config from '../config';

const { database } = config;

const pool = mysql.createPool({
    connectionLimit: database.CONNECTIONLIMIT,
    host: database.ADMIN_DB_HOST,
    user: database.ADMIN_DB_USER,
    password: database.ADMIN_DB_PASSWORD,
    database: database.ADMIN_DB_NAME,
});

export const query = (sql, params) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
        if (err) {
            return reject(err);
        }
        connection.query(sql, params, (err, rows) => {
            connection.release();
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
});
