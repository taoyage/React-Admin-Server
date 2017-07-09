/*
 * @Author: accord
 * @FileName: router.js 						   
 * @Date:   2017-07-06 11:27:37 						   
 * @Last Modified by:   accord 	   
 * @Last Modified time: 2017-07-06 13:12:28 	   
 */

'use strict';

import glob from 'glob';
import path from 'path';

const controllers = glob.sync('./controllers/**/*.js', { cwd: __dirname });
controllers.forEach(c => {
    const controller = require(c);
    controller.prefix && app.use(controller.prefix, controller);
})
