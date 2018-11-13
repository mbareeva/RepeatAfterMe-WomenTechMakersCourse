
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
 id: String,
 name: String,
 email: String,
 posts: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('User', UserSchema);