const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./api/postRoutes');
const userRoutes = require('./api/userRoutes')

router.use('/api', userRoutes)
router.use('/api', postRoutes)
router.use('/', homeRoutes);

module.exports = router;