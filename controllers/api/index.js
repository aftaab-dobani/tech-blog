const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./comment-route');

router.use('/users', userRoutes);
router.use('/posts', projectRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
