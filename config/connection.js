const Sequelize = require('sequelize');
require('dotenv').config();
// const Comment = require('../models/Comment');
// const User = require('../models/User');
// const Post = require('../models/Post');
// const models = require('../models/index')


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;