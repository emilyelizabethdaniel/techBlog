// relationships between models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.hasOne(User, {
    foreignKey: 'post_id'
});

Comment.hasOne(User, {
    foreignKey: 'comment_id'
})


module.exports = { User, Post, Comment };