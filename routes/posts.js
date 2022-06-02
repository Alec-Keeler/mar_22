const express = require('express');
const router = express.Router();
const { Post, Subbreaddit } = require('../db/models');
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true})

// Task 38
router.get('/', async (req, res) => {
    const posts = await Post.findAll();
    let loggedInUser
    if (req.session.auth) {
        loggedInUser = req.session.auth.userId
    }

    res.render('posts', { posts, loggedInUser });
})

// Task 26c
const newMiddleware = (req, res, next) => {
    console.log('You are accessing the new post route')
    next()
}

const errorArray = (req, res, next) => {
    req.errors = [];
    next()
}

const titleChecker = (req, res, next) => {
    const title = req.body.title
    if (title.length > 6) {
        next()
    } else {
        req.errors.push('Please provide a longer title, of at least 7 characters')
        next()
    }
}

const authCheck = (req, res, next) => {
    if (req.session.auth) {
        next()
    } else {
        res.redirect('/users/login')
    }
}

// Task 25a
router.get('/new', authCheck, newMiddleware, csrfProtection, async(req, res) => {
    const subs = await Subbreaddit.findAll()
    res.render('create-post', {csrfToken: req.csrfToken(), errors: [], data: {}, subs})
})

// Task 25c
router.post('/', errorArray, titleChecker, csrfProtection, async(req, res) => {
    console.log(req.body)
    if (req.errors.length > 0) {
        const subs = await Subbreaddit.findAll()
        res.render('create-post', {csrfToken: req.csrfToken(), errors: req.errors, data: req.body, subs})
    } else {
        const { title, content, subId } = req.body
        const post = await Post.create({
            title,
            content,
            userId: req.session.auth.userId,
            subId
        })
        res.redirect('/posts')
    }
})

router.delete('/:id(\\d+)', async(req, res) => {
    // console.log('you have arrived at the delete route handler')
    const post = await Post.findByPk(req.params.id)
    await post.destroy()

    res.json({message: 'Success!'})
})


module.exports = router;