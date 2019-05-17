var StreetLights = require('../models/streetlightModel')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = mm + '/' + dd + '/' + yyyy

module.exports = function (data) {
    for (var i = 0; i < 12; i++) {
        var dataChunk = new Array()
        for (var j = 0; j < 9; j++) {
            dataChunk[j] = data[i * 9 + j]
        }
        var StreetLight = new StreetLights()
        StreetLight.streetName = `Street ${i + 1}`
        if (dataChunk[0] == 1) {
            StreetLight.state = 'On'
        } else if (dataChunk[0] == 0) {
            StreetLight.state = 'Off'
        }
        var count = 0
        StreetLight.errorLights = ''
        for (var j = 1; j < 9; j++) {
            if (dataChunk[j] == 1) {
                StreetLight.errorLights += `${j} `
                count++
            }
        }
        if (count == 0) {
            StreetLight.errorLights = '-'
        }
        StreetLight.time = (new Date()).toLocaleTimeString()
        StreetLight.day = today
        StreetLight.save(function (err) {
            if (err) {
                throw err
            }
        })

    }
}