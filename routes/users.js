// Task 20a
const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

// router.get('/', (req, res) => {
//     res.send('YOU SHOULD NOT BE HERE')
// })

// Task 19a
router.get('/', async (req, res) => {
    const users = await User.findAll()
    // console.log(users)
    res.render('users', { users })
})

// /users/1
// Task 19c
router.get('/:id(\\d+)', async (req, res) => {
    // console.log(req.params)
    const user = await User.findByPk(req.params.id, {
        include: Post
    })
    console.log(user)
    res.render('profile', { user })
})

router.get('/hello', (req, res) => {
    res.send('Hello :)')
})

module.exports = router;