const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema ({
        placeName: String,
        placeAddress: String,
        rating: Number
})

module.exports = mongoose.model('Location', LocationSchema);