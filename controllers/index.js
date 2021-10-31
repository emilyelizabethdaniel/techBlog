const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./api/postRoutes');

router.use('/api', postRoutes)
router.use('/', homeRoutes);

module.exports = router;