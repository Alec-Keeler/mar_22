const express = require('express');
const router = express.Router();
const { Post } = require('../models');
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true})

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

// Task 25a
router.get('/new', newMiddleware, csrfProtection, (req, res) => {
    res.render('create-post', {csrfToken: req.csrfToken(), errors: [], data: {}})
})

// Task 25c
router.post('/', errorArray, titleChecker, csrfProtection, async(req, res) => {
    console.log(req.body)
    if (req.errors.length > 0) {
        res.render('create-post', {csrfToken: req.csrfToken(), errors: req.errors, data: req.body})
    } else {
        const { title, content } = req.body
        const post = await Post.create({
            title,
            content,
            userId: 1,
            subId: 1
        })
        res.redirect('/users/1')
    }
})


module.exports = router;