var TrucController = require('../controllers/TrucController')
var Trucs = require('../models/TrucModel')

module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('update', function (data) {
            TrucController(data[0], data[1], data[2], data[3], socket)
        })

        socket.on('salary', async function (data) {
            var count = 0
            var dataMonth = data[0]
            var dataLastMonth = data[0] - 1
            var dataYear = data[1]
            var dataLastYear = data[1] - 1
            if (dataMonth > 1) {
                for (var i = 21; i < 32; i++) {
                    await Trucs.find({ date: i, month: dataLastMonth, year: dataYear }, function (err, truc) {
                        if (err) {
                            throw err
                        } else {
                            if (truc.length > 0) {
                                count += truc[0].noHours
                            }
                        }
                    })
                }
                for (var i = 1; i < 21; i++) {
                    await Trucs.find({ date: i, month: dataMonth, year: dataYear }, function (err, truc) {
                        if (err) {
                            throw err
                        } else {
                            if (truc.length > 0) {
                                count += truc[0].noHours
                            }
                        }
                    })
                }
            }
            if (dataMonth == 1) {
                for (var i = 21; i < 32; i++) {
                    await Trucs.find({ date: i, month: 12, year: dataLastYear }, function (err, truc) {
                        if (err) {
                            throw err
                        } else {
                            if (truc.length > 0) {
                                count += truc[0].noHours
                            }
                        }
                    })
                }
                for (var i = 1; i < 21; i++) {
                    await Trucs.find({ date: i, month: dataMonth, year: dataYear }, function (err, truc) {
                        if (err) {
                            throw err
                        } else {
                            if (truc.length > 0) {
                                count += truc[0].noHours
                            }
                        }
                    })
                }
            }
            socket.emit('salaryres', count)
        })
    })
}