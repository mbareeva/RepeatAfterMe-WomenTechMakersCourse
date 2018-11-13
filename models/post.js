
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema ({
      topic: String,
      description: String,
      maps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Map'
      }]
    })

    module.exports = mongoose.model('Post', PostSchema);