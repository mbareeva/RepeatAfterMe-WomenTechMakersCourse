//const fs = require("fs")

const UserModel = require('../models/user')
const PostModel = require('../models/post')

//const dbPath = `${__dirname}/../data.json`

async function addPost(userId, postId) {
    const user = await UserModel.findOne({ _id: userId })
    const post = await PostModel.findOne({ _id: postId })

    user.posts.push(post)

    await user.save()

    return user
}

async function findAll() {
  return UserModel.find().populate('posts')
}
//add a user
async function add(person) {
    return UserModel.create(person)
}

async function del(_id) {
    return UserModel.remove({_id})
}

async function find(_id) {
    return UserModel.findOne({_id}).populate('posts')
}

async function findByName(personName){
    return UserModel.find({name: personName})
}

module.exports = {
    addPost,
    findAll,
    find,
    findByName,
    add,
    del
}
