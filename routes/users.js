// Task 20a
const express = require('express');
const router = express.Router();
const { User, Post } = require('../db/models');
const asyncHandler = require('express-async-handler');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const bcrypt = require('bcryptjs');

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
        res.render('profile', { user })
    } catch (err) {
        next(err)
    }
    // console.log(user)
})

router.get('/hello', (req, res) => {
    res.send('Hello :)')
})

// Task 33a
router.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', { csrfToken: req.csrfToken(), errors: [], user: {} })
})

// Task 33c
const signUpValidator = (req, res, next) => {
    const { username, password, confirmPassword } = req.body;
    req.errors = [];

    if (username.length < 2) {
        req.errors.push('Please provide a longer username')
    }
    if (!(password === confirmPassword)) {
        req.errors.push('Please make sure to type the same password both times!')
    }

    next()
}

// Task 33c
router.post('/signup', csrfProtection, signUpValidator, async (req, res) => {
    const { username, bio, avatar, faveBread, password, } = req.body
    if (req.errors.length > 0) {
        res.render('signup', {
            csrfToken: req.csrfToken(),
            errors: req.errors,
            user: req.body
        })
    } else {
        //Perform password hashing before creating the user
        const hash = await bcrypt.hash(password, 10)
        const user = await User.create({
            username, bio, avatar, faveBread, password: hash
        })
        req.session.auth = {username: user.username, userId: user.id}
        res.redirect('/users')
    }
})

// Task 34a
router.get('/login', csrfProtection, (req, res) => {
    res.render('login', { csrfToken: req.csrfToken(), errors: [], user: {} })
})

// Task 33c
router.post('/login', csrfProtection, async (req, res) => {
    const { username, password } = req.body
    req.errors = []
    const user = await User.findOne({
        where: {
            username
        }
    })

    //Fill out with password hashing
    const isPassword = await bcrypt.compare(password, user.password)
    if (user && isPassword) {
    // if (user) {
        req.session.auth = { username: user.username, userId: user.id }
        res.redirect('/users')
    } else {
        req.errors.push('Account validation failed.  Please Try again.')
        res.render('login', { csrfToken: req.csrfToken(), errors: req.errors, user: { username } })
    }
})

// Task 36c
router.get('/logout', (req, res) => {
    delete req.session.auth
    // Task 36d
    req.session.save(() => res.redirect('/users'))
    // res.redirect('/users')
})

module.exports = router;