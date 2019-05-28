var nodemailer = require('nodemailer')

var streetLightController = require('../controllers/streetLightController')

async function checkLightAndSentEmailAlarm(data) {
    var mesNotifyTurn = ''
    var mesAlarm = ''
    var countErrorLight = new Array(12)
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
        countErrorLight[i] = 0
        for (var j = 1; j < 9; j++) {
            if (dataChunk[j] == 1) {
                countErrorLight[i]++
            }
        }
    }
    for (var i = 0; i < 12; i++) {
        if (countErrorLight[i] > 0) {
            mesAlarm = `${mesAlarm}
            Street ${i + 1} has ${countErrorLight[i]} error lights`
        }
    }
    console.log(mesNotifyTurn)
    console.log(mesAlarm)
    var transporter = nodemailer.createTransport('smtps://tuankhoa.0013%40gmail.com:7AHJTT19001560@smtp.gmail.com')
    // var transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: 'tuankhoa.0013@gmail.com',
    //         pass: '7AHJTT19001560'
    //     }
    // })
    var mainOptions = {
        from: 'Tuan Khoa',
        to: 'tuankhoa.0013@gmail.com',
        subject: 'Alarm street light',
        text: mesNotifyTurn + mesAlarm,
        html: ''
    }
    await transporter.sendMail(mainOptions)
}

var dataTempStC = new Array()
module.exports = function (io, client) {

    //#region listen from Client to Server and publish from Server to PLC
    io.on('connection', function (socket) {
        socket.on('dataCtS', function (dataCtS) {
            client.publish('dataStP', dataCtS, { qos: 2 })
        })
    })
    //#endregion listen from Client to Server and publish from Server to PLC

    //#region subscribe from PLC to Server and emit from Server to Client
    client.on('connect', function () {
        console.log('|-----|||||====== MQTT CONNECTED ====== |||||-----|')
        client.subscribe('dataPtS')

        // listen all message of all topic
        client.on('message', function (topic, dataPtS) {
            if (topic == 'dataPtS') {
                dataStC = dataPtS.toString()
                io.emit('dataStC', dataStC)
                if (dataTempStC.length == 0) {
                    for (var i = 0; i < 107; i++) {
                        dataTempStC[i] = dataStC[i]
                    }
                } else {
                    for (var i = 0; i < 12; i++) {
                        var count2 = 0
                        var dataChunkStC = new Array()
                        for (var j = 0; j < 9; j++) {
                            dataChunkStC[j] = dataStC[i * 9 + j]
                            if (dataTempStC[i * 9 + j] != dataStC[i * 9 + j]) {
                                count2++
                            }
                        }
                        if (count2 > 0) {
                            streetLightController(dataChunkStC, i)
                        }
                    }
                    var count1 = 0
                    for (var i = 0; i < 108; i++) {
                        if (dataTempStC[i] != dataStC[i]) {
                            dataTempStC[i] = dataStC[i]
                            count1++
                        }
                    }
                    if (count1 > 0) {
                        checkLightAndSentEmailAlarm(dataStC)
                    }

                }
            }
        })
    })
    //#endregion subscribe from PLC to Server and emit from Server to Client
}