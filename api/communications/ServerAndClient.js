var TrucController = require('../controllers/TrucController')

module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('update', function (data) {
            TrucController(data[0], data[1], data[2], data[3], socket)
        })

    })
}