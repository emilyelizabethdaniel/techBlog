const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

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
    console.log(req.body);
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


router.post('/', async(req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/user/login', async(req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/user/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/newuser', async(req, res) => {
    res.render('newuser');
})


module.exports = router;