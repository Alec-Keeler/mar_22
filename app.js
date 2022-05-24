const express = require('express');
const { User } = require('./models');
// Task 16a
const app = express();

// Task 17
app.get('/', (req, res) => {
    // res.send('Welcome to Breaddit :)')
    // Task 18
    res.render('home', {sentence: 'This is a bread.'})
})

// Task 19a
app.get('/users', async(req, res) => {
    const users = await User.findAll()
    // console.log(users)
    res.render('users', {users})
})


// Task 18a
app.set('view engine', 'pug')
// Task 16b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))