const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/homepage', async(req, res) => {
    try {
        const mapData = await Post.findAll();
        const postData = mapData.map(postObj => postObj.get({ plain: true }))

        console.log(postData);
        res.render('homepage', { postData });
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


module.exports = router;