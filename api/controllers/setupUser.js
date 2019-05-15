var User = require('../models/userModel')

module.exports = function (app) {
    app.get('/api/setupuser', function (req, res) {
        var listUser = [
            {
                email: 'tuankhoa.0013@gmail.com',
                password: '19001560'
            },
            {
                email: '1511565@hcmut.edu.vn',
                password: '19001560'
            },
            {
                email: 'tuankhoa.hoangngoc@gmail.com',
                password: '19001560'
            },
            {
                email: '1511607@hcmut.edu.vn',
                password: '19001560'
            }
        ]
        User.create(listUser, function (err, result) {
            res.send(result)
        })
    })
}