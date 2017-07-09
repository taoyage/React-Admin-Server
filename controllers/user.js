/*
 * @Author: accord
 * @FileName: user.js                          
 * @Date:   2017-07-06 11:36:21                            
 * @Last Modified by:   accord     
 * @Last Modified time: 2017-07-09 23:31:46        
 */

'use strict';

import { Router } from 'express';
import { omit } from 'lodash';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from '../config';
import UserModel from '../models/user';

const router = module.exports = new Router();
router.prefix = '/';

const jwtAuthorize = [
    expressJwt({
        secret: config.token.secret,
        audience: config.token.audience,
        issuer: config.token.issuer,
        credentialsRequired: false,
        getToken: getTokenFromRequest,
        isRevoked(req, payload, done) {
            done(null, revokedTokens.includes(payload.uuid))
        }
    })
];

const getTokenFromRequest = (req) => {
    if (!req.headers.authorization) return null;
    const temp = req.headers.authorization.split(' ');
    const types = ['Bearer', 'JWT'];
    if (types.includes(temp[0])) return temp[1];
    return req.params.token;
};

// create token
router.post('/user/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(404).send({ error: 'You must send the username and the password' });
    }
    UserModel.queryUser(username)
        .then(user => {
            if (!user) {
                return res.status(401).send({ message: 'Incorrect username or password.' });
            }
            if (password !== user.password) {
                return res.status(401).send({ message: 'Incorrect username or password.' });
            }
            if (username === user.username, password === user.password) {
                const token = jwt.sign({}, config.token.secret, { expiresIn: config.token.expires, audience: config.token.audience, issuer: config.token.issuer });
                return res.status(200).json({ token, message: 'success' });
            }
        })
        .catch(err => {
            return res.status(500).send({ error: err.message });
        })
});
