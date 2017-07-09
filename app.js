/*
 * @Author: accord
 * @FileName: app.js 						   
 * @Date:   2017-07-05 23:18:24 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-07-06 14:30:21 	   
 */

'use strict';

import express from 'express';
const app = express();


//======= 对请求体进行解析 =======
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//======= 跨域请求处理 ========
import cors from 'cors';
app.use(cors());


import glob from 'glob';
const controllers = glob.sync('./controllers/**/*.js', { cwd: __dirname });
controllers.forEach(c => {
    const controller = require(c);
    controller.prefix && app.use(controller.prefix, controller);
})

app.listen(8888, () => {
    console.log('server running in http://localhost:8888');
});
