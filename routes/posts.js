const express = require('express');
const router = express.Router();

// Task 25a
router.get('/new', (req, res) => {
    res.render('create-post')
})

// Task 25c
router.post('/', (req, res) => {
    console.log('Hello from post route')
})


module.exports = router;