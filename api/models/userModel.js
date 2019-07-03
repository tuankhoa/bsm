var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    password: String
})

var UserSchema = mongoose.model('User', UserSchema)

module.exports = UserSchema