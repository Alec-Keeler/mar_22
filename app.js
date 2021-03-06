const express = require('express');
const { User, Post } = require('./db/models');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Task 16a
const app = express();

// Task 26a
app.use((req, res, next) => {
    req.banana = true
    next()
})

// Task 27a
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser('secretString'))
// Task 22
app.use(express.static('./public'))

app.use(session({
    secret: 'secretString',
    resave: false,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    console.log(req.session)
    next()
})

// Task 20b
app.use('/users', usersRouter)
app.use('/posts', postsRouter)
// app.use('/bananas', usersRouter)

// Task 17
app.get('/', (req, res) => {
    // res.send('Welcome to Breaddit :)')
    // Task 18
    res.render('home', {sentence: 'This is a bread.'})
})

// Task 21b
// app.all('*', (req, res) => {
//     res.redirect('/')
// })

// Task 21c
// /users
// /posts

// /posts/1
// /posts/1/comments

// app.all(/[abc]+[0-9]{1}/, (req, res) => {
//     res.send('this is the regex route')
// })

// Task 31a
app.use((req, res, next) => {
    res.status(404)
    res.send('Hey we couldn\'t find the page you were looking for')
})

app.use((err, req, res, next) => {
    console.log(err.message)
    res.send(err.message)
})



// Task 18a
app.set('view engine', 'pug')
// Task 16b
// const port = 8080;
// app.listen(port, () => console.log(`Listening on port ${port}...`))
module.exports = app;