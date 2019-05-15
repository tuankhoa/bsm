var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var StreetLightSchema = new Schema({
    streetName: String,
    turnLight: Boolean,
    light1: Boolean,
    light2: Boolean,
    light3: Boolean,
    light4: Boolean,
    light5: Boolean,
    light6: Boolean,
    light7: Boolean,
    light8: Boolean,
    sensor1: Boolean,
    sensor2: Boolean,
    sensor3: Boolean,
    sensor4: Boolean,
    sensor5: Boolean,
    sensor6: Boolean,
    sensor7: Boolean,
    sensor8: Boolean,
})

var StreetLight = mongoose.model('StreetLight', StreetLightSchema)

module.exports = StreetLight