const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

module.exports = router;

router.get('/users', async(req, res) => {
    try {
        const userData = await User.findAll({
            // include: [{ model: Product }],
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/new-user', async(req, res) => {
    // create a new category
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password

        });
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/new-post', async(req, res) => {
    // create a new category
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,


        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/blog-posts', async(req, res) => {
    try {
        const postData = await Post.findAll({
            // include: [{ model: Product }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/new-comment', async(req, res) => {
    // create a new category
    try {
        const commentData = await Comment.create({
            content: req.body.content,
            user_id: req.body.user_id,
            blog_id: req.body.blog_id

        });
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/comments', async(req, res) => {
    try {
        const commentData = await Comment.findAll({
            // include: [{ model: Product }],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;