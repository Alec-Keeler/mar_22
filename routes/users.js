// Task 20a
const express = require('express');
const router = express.Router();
const { User, Post } = require('../db/models');

// Task 26b
router.use((req, res, next) => {
    if (req.banana) {
        console.log('hello you are in the users route file')
        next()
    } else {
        res.send('Why is banana not true????')
    }
})

// Task 19a
router.get('/', async (req, res) => {
    const users = await User.findAll()
    console.log(req.banana)
    res.render('users', { users })
})

// /users/1
// Task 19c
router.get('/:id(\\d+)', async (req, res) => {
    // console.log(req.params)
    const user = await User.findByPk(req.params.id, {
        include: Post
    })
    // console.log(user)
    res.render('profile', { user })
})

router.get('/hello', (req, res) => {
    res.send('Hello :)')
})

module.exports = router;