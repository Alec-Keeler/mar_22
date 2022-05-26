// Task 20a
const express = require('express');
const router = express.Router();
const { User, Post } = require('../db/models');
const asyncHandler = require('express-async-handler');

// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

// const asyncHandler = (handler) => {
//     return (req, res, next) => {
//         return handler(req, res, next).catch(next);
//     };
// };

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
router.get('/', asyncHandler(async (req, res, next) => {
    const users = await User.findAll()
    console.log(req.banana)
    // const err = new Error('This is a random error :(')
    // next()
    res.render('users', { users })
}))

// /users/1
// Task 19c
router.get('/:id(\\d+)', async (req, res, next) => {
    // console.log(req.params)
    try {
        const user = await User.findByPk(req.params.id, {
            include: Post
        })
    } catch (err) {
        next(err)
    }
    // console.log(user)
    res.render('profile', { user })
})

router.get('/hello', (req, res) => {
    res.send('Hello :)')
})

module.exports = router;