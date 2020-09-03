var Trucs = require('../models/TrucModel')

module.exports = function (inDate, inMonth, inYear, inNoHours, inNote, socket) {
    if (inDate > 0 & inMonth > 0 & inYear > 0 & inNoHours >= 0) {
        var Truc = new Trucs()
        Trucs.find({ date: inDate, month: inMonth, year: inYear }, function (err, truc) {
            if (err) {
                throw err
            } else {
                if (truc.length == 0) {
                    if (inNoHours != 0) {
                        Truc.date = inDate
                        Truc.month = inMonth
                        Truc.year = inYear
                        Truc.noHours = inNoHours
                        Truc.note = inNote
                        Truc.save(function (err) {
                            if (err) {
                                throw err
                            }
                        })
                        socket.emit('addnew', `Thêm mới: Ngày ${inDate}/${inMonth}/${inYear} bé làm ${inNoHours}h`)
                    }
                } else {
                    if (inNoHours == 0) {
                        Trucs.deleteOne({ date: inDate, month: inMonth, year: inYear }, function (err) {
                            if (err) {
                                throw err
                            }
                        })
                        socket.emit('delete', `Đã xóa dữ liệu ngày ${inDate}/${inMonth}/${inYear}`)
                    } else if ((truc[0].noHours != inNoHours && inNoHours != 0) || truc[0].note != inNote) {
                        Trucs.updateOne({ date: inDate, month: inMonth, year: inYear },
                            { noHours: inNoHours, note: inNote }, function (err) {
                                if (err) {
                                    throw err
                                }
                            }
                        )
                        socket.emit('update', `Cập nhật giờ làm ngày ${inDate}/${inMonth}/${inYear}: ${inNoHours}h`)
                    }
                }
            }
        })

    }
}