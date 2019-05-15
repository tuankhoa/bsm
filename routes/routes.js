var Users = require('../api/models/userModel')

module.exports = function (app, passport) {

    app.get('/getuser', function (req, res) {
        Users.findOne({ email: 'tuankhoa.hoangngoc@gmail.com' }, function (err, userKhoa) {
            if (err) {
                throw err
            } else {
                res.send(userKhoa)
            }
        })
    })

    app.get(['/', '/home'], isLoggedInHome, function (req, res) {
        res.render('pages/home')
    })

    app.get('/introduction', function (req, res) {
        res.render('pages/homeFake')
    })

    app.get('/login', function (req, res) {
        res.render('pages/login')
    })

    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/home')
        }
    )

    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/login')
        })
    })

    app.get('/streetlight', function (req, res) {

        res.render('pages/streetLight')
    })

    app.get('/trafficlamp', function (req, res) {
        res.render('pages/trafficLamp')
    })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login')
}
function isLoggedInHome(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/introduction')
}