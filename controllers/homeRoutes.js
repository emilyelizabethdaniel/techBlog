const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async(req, res) => {
    try {
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [{
                model: Post,
                attributes: ['title'],
            }, ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});