const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async(req, res) => {
    console.log('am i broken');
    try {
        // var projectData = await Project.findAll();
        // var projectData = [];
        // projectData.forEach(projObj => {

        //     projectData.push(projObj.get({ plain: true }))
        // })
        // res.render('homepage', { project: projectData })
        // same code using mapping
        const postData = await Post.findAll();
        const mappedData = postData.map(postObj => postObj.get({ plain: true }))
            // const project = projObj.get({ plain: true });
        console.log(mappedData);
        res.render('homepage', { mappedData });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

});

module.exports = router;