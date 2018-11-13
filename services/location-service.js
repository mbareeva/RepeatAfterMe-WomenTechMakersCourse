const LocationModel = require('../models/location')

async function findAll() {
    return LocationModel.find()
}

async function add(location) {
    return LocationModel.create(location)
}

async function del(_id) {
    return LocationModel.remove({ _id })
}

async function find(_id) {
    return LocationModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del
}