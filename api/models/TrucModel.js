var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var TrucSchema = new Schema({
    date: Number,
    month: Number,
    year: Number,
    noHours: Number,
    note: String
})

var Truc = mongoose.model('Truc', TrucSchema)

module.exports = Truc