var nodemailer = require('nodemailer')

function checkSensorAndSentEmailAlarm(data) {
    var mesNotifyTurn = ''
    var mesAlarm = ''
    var countErrorSensor = new Array(12)
    for (var i = 0; i < 12; i++) {
        var dataChunk = new Array(9)
        for (var j = 0; j < 9; j++) {
            dataChunk[j] = data[i * 9 + j]
        }
        if (data[i * 9] == 1) {
            mesNotifyTurn = `${mesNotifyTurn}
            Street ${i + 1} is turned on`
        } else if (data[i * 9] == 0) {
            mesNotifyTurn = `${mesNotifyTurn}
            Street ${i + 1} is turned off`
        }
        countErrorSensor[i] = 0
        for (var j = 1; j < 9; j++) {
            if (dataChunk[j] == 1) {
                countErrorSensor[i]++
            }
        }
    }
    for (var i = 0; i < 12; i++) {
        if (countErrorSensor[i] > 0) {
            mesAlarm = `${mesAlarm}
            Street ${i + 1} has ${countErrorSensor[i]} error lights`
        }
    }
    // console.log(mesNotifyTurn)
    // console.log(mesAlarm)
    var transporter = nodemailer.createTransport('smtps://tuankhoa.0013%40gmail.com:7AHJTT19001560@smtp.gmail.com')
    var mainOptions = {
        from: 'Tuan Khoa',
        to: 'tuankhoa.0013@gmail.com',
        subject: 'Alarm street light',
        text: mesNotifyTurn + mesAlarm,
        html: ''
    }
    transporter.sendMail(mainOptions)
}

var dataTempStC = new Array()
var dataTest = new Array(108)
module.exports = function (io, client) {

    //#region listen from Client to Server and publish from Server to PLC
    io.sockets.on('connection', function (socket) {
        socket.on('streetCtS', function (dataCtS) {
            console.log(dataCtS)
            var transporter = nodemailer.createTransport('smtps://tuankhoa.0013%40gmail.com:7AHJTT19001560@smtp.gmail.com')
            var mainOptions = {
                from: 'Tuan Khoa',
                to: 'tuankhoa.0013@gmail.com',
                subject: 'Alarm street light',
                text: 'alo',
                html: ''
            }
            transporter.sendMail(mainOptions)
            client.publish('streetStP', dataCtS, { qos: 2 })
        })
    })
    //#endregion listen from Client to Server and publish from Server to PLC

    //#region subscribe from PLC to Server and emit from Server to Client
    client.on('connect', function () {
        console.log('|-----|||||====== MQTT CONNECTED ====== |||||-----|')
        client.subscribe('streetPtS')

        // listen all message of all topic
        client.on('message', function (topic, dataPtS) {
            if (topic == 'streetPtS') {
                dataStC = dataPtS.toString()
                io.emit('streetStC', dataStC)

                if (dataTempStC.length == 0) {
                    for (var i = 0; i < 107; i++) {
                        dataTempStC[i] = dataStC[i]
                    }
                } else {
                    for (var i = 0; i < 108; i++) {
                        if (dataTempStC[i] != dataStC[i]) {
                            dataTempStC[i] = dataStC[i]
                            checkSensorAndSentEmailAlarm(dataStC)
                        }
                    }
                }
            }
        })
    })
    //#endregion subscribe from PLC to Server and emit from Server to Client
}