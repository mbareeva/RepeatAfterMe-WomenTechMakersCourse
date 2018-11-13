const MapModel = require('../models/map')
const LocationModel = require('../models/location')

async function addLocation(mapId, locationId) {
    const map = await MapModel.findOne({ _id: mapId })
    const location = await LocationModel.findOne({ _id: locationId })

    map.locations.push(location)

    await map.save()

    return map
}

async function findAll() {
    return MapModel.find().populate('locations')
}

async function add(map) {
    return MapModel.create(map)
}

async function del(_id) {
    return MapModel.remove({ _id })
}

async function find(_id) {
    return MapModel.findOne({ _id }).populate('locations')
}

module.exports = {
    addLocation,
    findAll,
    find,
    add,
    del
}