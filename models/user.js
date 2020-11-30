const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
        email: {
        type: String,
        unique: true
  },
    password: {
        type: String
       
    },
    name: {
        type: String,
    },
    profile: {
        type: String,
    }
});
User.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('user', User);