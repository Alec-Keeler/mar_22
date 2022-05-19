// Task 11
const {User, Post} = require('../models');

// Task 11a
async function buildUser() {
    const user = User.build({
        username: 'Alec',
        password: 'password123!',
        bio: 'I am Alec',
        avatar: 'It was ok',
        faveBread: 'Sandwiches'
    })

    await user.save()
}

buildUser()

// Task 11b
async function createPost(title, content) {
    const post = await Post.create({
        title: title,
        content: content,
        userId: 1,
        subId: 1
    })
}

// createPost('Is rice the new bread?', 'Please provide valid arguments')