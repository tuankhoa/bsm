var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var StreetLightSchema = new Schema({
    streetName: String,
    day: String,
    time: String,
    state: String,
    errorLights: String
})

var StreetLight = mongoose.model('StreetLight', StreetLightSchema)

module.exports = StreetLight