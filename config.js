/*
 * @Author: accord
 * @FileName: config.js                            
 * @Date:   2017-07-06 11:12:46                            
 * @Last Modified by:   accord     
 * @Last Modified time: 2017-07-09 23:28:52        
 */

'use strict';

/**
 * 项目配置
 */
export default {
    database: {
        /**
         * 连接数
         */
        'CONNECTIONLIMIT': 50,
        /**
         * 数据库主机名
         */
        'ADMIN_DB_HOST': '127.0.0.1',
        /**
         * 数据库名
         */
        'ADMIN_DB_NAME': 'admin',
        /**
         * 数据库用户
         */
        'ADMIN_DB_USER': 'root',
        /**
         * 数据库密码
         */
        'ADMIN_DB_PASSWORD': '130578'
    },
    token: {
        secret: "beier",
        issuer: 'yage',
        audience: 'beier',
        expires: 24 * 60 * 60
    }
};
