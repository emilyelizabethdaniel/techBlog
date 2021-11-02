const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async(req, res) => {
    try {
        const commentData = await Comment.findAll();
        const newCommentData = commentData.map(commentObj => commentObj.get({ plain: true }))
        const mapData = await Post.findAll();
        let postData = mapData.map(postObj => postObj.get({ plain: true }));

        postData = postData.map(postObj => {
            const postComments = newCommentData.filter(comment => {
                return comment.blog_id === postObj.id
            })
            return {...postObj, postComments }
        })

        console.log('postData :>> ', postData);
        console.log('commentData :>> ', newCommentData);
        res.render('homepage', { postData, newCommentData });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

});


router.get('/post/:id', async(req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            // include: [{
            //     model: Post,
            //     attributes: ['content'],
            // }, ],
        });

        const postData = post.get({ plain: true });
        console.log(postData);
        res.render('post', {
            ...postData,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async(req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async(req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

router.get('/newuser', async(req, res) => {
    try {
        res.render('newuser');
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;