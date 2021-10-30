const router = require('express').Router();
//require in all routes

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
module.exports = router;