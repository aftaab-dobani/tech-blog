const router = require('express').Router();
const { post , user } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await post.findAll({
            where: {
                userId: req.session.userId,
            },
        });

        const Posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts-admin', {
            layout: 'dashboard', 
            posts, 
        });

    }    catch (err) {
        res.redirect('login');
    }
});

router