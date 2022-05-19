// Task 11
const {User, Post, Sequelize: {Op}} = require('../models');

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

// buildUser()

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

// Task 12a
async function findUserByPk(userId) {
    const user = await User.findByPk(userId)

    console.log(JSON.stringify(user, null, 2))
}

// findUserByPk(1)

// Task 12b
async function getAllPosts() {
    const posts = await Post.findAll()

    console.log(JSON.stringify(posts, null, 2))
}

// getAllPosts()

// Task 12c
async function findUserByName(username) {
    const user = await User.findOne({
        where: {
            username
        }
    })

    console.log(JSON.stringify(user, null, 2))
}

// findUserByName('Shane')

// Task 12d
async function findSomePosts(subId) {
    const posts = await Post.findAll({
        where: {
            subId
        }
    })

    console.log(JSON.stringify(posts, null, 2))
}

// findSomePosts(1)

// Task 12e
async function getEvenFewerPosts(subId, userId) {
    const posts = await Post.findAll({
        where: {
            subId,
            userId
        }
    })

    console.log(JSON.stringify(posts, null, 2))
}
// getEvenFewerPosts(1, 1)

// Task 12f
async function getPostsBySearch(searchTerm) {
    const posts = await Post.findAll({
        where: {
            title: {
                [Op.iLike]: `%${searchTerm}%`
            }
        }
    })

    console.log(JSON.stringify(posts, null, 2))
}
// getPostsBySearch('test')

async function getPostsInOrder() {
    const posts = await Post.findAll({
        order: [['userId', 'DESC'], ['title', 'DESC']],
        limit: 2
    })

    console.log(JSON.stringify(posts, null, 2))
}

// getPostsInOrder()