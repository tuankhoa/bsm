var Trucs = require('../api/models/TrucModel')

module.exports = function (app, passport) {

    app.get('/', isLoggedIn, function (req, res) {
        res.render('pages/home')
    })

    app.get('/login', function (req, res) {
        res.render('pages/login')
    })

    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/')
        }
    )

    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/login')
        })
    })
    app.get('/history', isLoggedIn, async function (req, res) {
        var temp_history = []
        // ngay thang nam
        if (req.query.qDate != '' & req.query.qMonth != '' & req.query.qYear != '') {
            await Trucs.find({ date: req.query.qDate, month: req.query.qMonth, year: req.query.qYear }, function (err, results) {
                if (err) {
                    throw err
                }
                results.forEach(function (row) {
                    temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
                })
                res.status(200).send(temp_history)
            })
        }
        // ngay
        if (req.query.qDate != '' & req.query.qMonth == '' & req.query.qYear == '') {
            await Trucs.find({ date: req.query.qDate }, function (err, results) {
                if (err) {
                    throw err
                }
                results.forEach(function (row) {
                    temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
                })
                res.status(200).send(temp_history)
            })
        }
        // thang
        if (req.query.qDate == '' & req.query.qMonth != '' & req.query.qYear == '') {
            await Trucs.find({ month: req.query.qMonth }, function (err, results) {
                if (err) {
                    throw err
                }
                results.forEach(function (row) {
                    temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
                })
                res.status(200).send(temp_history)
            })
        }
        // nam
        if (req.query.qDate == '' & req.query.qMonth == '' & req.query.qYear != '') {
            await Trucs.find({ year: req.query.qYear }, function (err, results) {
                if (err) {
                    throw err
                }
                results.forEach(function (row) {
                    temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
                })
                res.status(200).send(temp_history)
            })
        }
        // ngay thang
        if (req.query.qDate != '' & req.query.qMonth != '' & req.query.qYear == '') {
            await Trucs.find({ date: req.query.qDate, month: req.query.qMonth }, function (err, results) {
                if (err) {
                    throw err
                }
                results.forEach(function (row) {
                    temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
                })
                res.status(200).send(temp_history)
            })
        }
        // ngay nam
        if (req.query.qDate != '' & req.query.qMonth == '' & req.query.qYear != '') {
            await Trucs.find({ date: req.query.qDate, year: req.query.qYear }, function (err, results) {
                if (err) {
                    throw err
                }
                results.forEach(function (row) {
                    temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
                })
                res.status(200).send(temp_history)
            })
        }
        // thang nam
        if (req.query.qDate == '' & req.query.qMonth != '' & req.query.qYear != '') {
            await Trucs.find({ month: req.query.qMonth, year: req.query.qYear }, function (err, results) {
                if (err) {
                    throw err
                }
                results.forEach(function (row) {
                    temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
                })
                res.status(200).send(temp_history)
            })
        }

    })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login')
}