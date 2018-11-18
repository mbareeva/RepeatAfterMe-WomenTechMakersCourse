
const mongoose = require('mongoose')

const MapSchema = new mongoose.Schema ({
  
      caption: String,
      locations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
      }]
    })

    module.exports = mongoose.model('Map', MapSchema);