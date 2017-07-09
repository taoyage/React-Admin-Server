/*
* @Author: accord
* @Date:   2017-07-09 22:17:53
* @Last Modified by:   accord
* @Last Modified time: 2017-07-09 22:22:52
*/

CREATE DATABASE IF NOT EXISTS ADMIN;

CREATE TABLE users(
	id INT PRIMARY KEY auto_increment,
	username VARCHAR(20) NOT NULL,
	password VARCHAR(50) NOT NULL,
	name VARCHAR(20) NOT NULL,
	auth VARCHAR(20) NOT NULL
)engine=MyISAM charset=utf8;