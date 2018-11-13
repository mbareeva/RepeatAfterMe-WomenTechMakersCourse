//const MeetupModel = require('../models/meetup')

const PostModel = require('../models/post')
const MapModel = require('../models/map')

async function addMap(postId, mapId) {
    const post = await PostModel.findOne({ _id: postId })
    const map = await MapModel.findOne({ _id:mapId })

    post.maps.push(map)

    await post.save()

    return post
}

async function findAll() {
    return PostModel.find().populate('maps')
}

async function add(post) {
    return PostModel.create(post)
}

async function del(_id) {
    return PostModel.remove({ _id })
}

async function find(_id) {
    return PostModel.findOne({ _id }).populate('maps')
}

module.exports = {
    addMap,
    addAttendee,
    findAll,
    find,
    add,
    del
}