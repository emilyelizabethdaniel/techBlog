const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
            model: 'user',
            id: 'username',
        }
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            id: 'id'
        }
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
});

module.exports = Comment;