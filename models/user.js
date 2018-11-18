
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
 name: String,
 email: String,
 posts: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Post'
  }]
})

module.exports = mongoose.model('User', UserSchema);