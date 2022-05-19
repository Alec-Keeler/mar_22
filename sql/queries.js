// Task 11
const {User, Post, Subbreaddit, Sequelize: {Op}} = require('../models');

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

// Task 13a

async function updateUser(userId) {
    const user = await User.findByPk(userId)

    user.username = 'Alec Keeler'
    user.bio = 'I am Alec Keeler'

    await user.save()
}

// updateUser(5)

// Task 13b
async function deleteUser(username) {
    const user = await User.findOne({
        where: {
            username
        }
    })

    await user.destroy()
}

// deleteUser('Ray')

// Task 14a
async function getProfile(userId) {
    const user = await User.findByPk(userId, {
        include: Post
    })

    console.log(JSON.stringify(user, null, 2))
}

getProfile(2)

// Task 14b
async function getProfileAndSubs(userId) {
    const user = await User.findByPk(userId, {
        include: [Post, Subbreaddit]
    })

    console.log(JSON.stringify(user, null, 2))
}

// getProfileAndSubs(2)

// Task 14c
async function getUserPostsSubs(userId) {
    const user = await User.findByPk(userId, {
        include: { model: Post, include: {model: Subbreaddit} }
    })

    console.log(JSON.stringify(user, null, 2))
}

// getUserPostsSubs(2)