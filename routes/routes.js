var Users = require('../api/models/userModel')
var StreetLights = require('../api/models/streetlightModel')

module.exports = function (app, passport) {

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

    app.get('/streetlight', isLoggedIn, function (req, res) {

        res.render('pages/streetLight')
    })

    app.get('/trafficlamp', isLoggedIn, function (req, res) {
        res.render('pages/trafficLamp')
    })

    app.get('/history', isLoggedIn, async function (req, res) {
        var temp_history = [];
        await StreetLights.find({ streetName: req.query.streetname }, function (err, results) {
            if (err) {
                throw err
            }
            results.forEach(function (row) {
                temp_history.push({ 'day': row.day, 'time': row.time, 'state': row.state, 'errorLights': row.errorLights })
            })
            res.status(200).send(temp_history)
        })
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