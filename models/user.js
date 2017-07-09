/*
 * @Author: accord
 * @FileName: user.js 						   
 * @Date:   2017-07-09 22:49:07 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-07-09 23:30:48 	   
 */

'use strict';
import * as db from './db';

export default class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    };
    static queryUser(username) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users WHERE username=?`, [username])
                .then(rows => resolve(rows[0]))
                .catch(err => reject(err))
        });
    };
};
