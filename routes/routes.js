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

    app.get('/getdata', function (req, res) {
        res.render('pages/index')
    })

    app.get('/historyall', isLoggedIn, async function (req, res) {
        var temp_history = []
        await Trucs.find({}, function (err, results) {
            if (err) {
                throw err
            }
            results.forEach(function (row) {
                temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
            })
            res.status(200).send(temp_history)
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
            var dataMonth = req.query.qMonth
            var dataLastMonth = req.query.qMonth - 1
            var dataYear = req.query.qYear
            var dataLastYear = req.query.qYear - 1
            if (dataMonth > 1) {
                for (var i = 21; i < 32; i++) {
                    await Trucs.find({ date: i, month: dataLastMonth, year: dataYear }, function (err, truc) {
                        if (err) {
                            throw err
                        } else {
                            if (truc.length > 0) {
                                temp_history.push({ 'date': truc[0].date, 'month': truc[0].month, 'year': truc[0].year, 'noHours': truc[0].noHours })
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
                                temp_history.push({ 'date': truc[0].date, 'month': truc[0].month, 'year': truc[0].year, 'noHours': truc[0].noHours })
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
                                temp_history.push({ 'date': truc[0].date, 'month': truc[0].month, 'year': truc[0].year, 'noHours': truc[0].noHours })
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
                                temp_history.push({ 'date': truc[0].date, 'month': truc[0].month, 'year': truc[0].year, 'noHours': truc[0].noHours })
                            }
                        }
                    })
                }
            }
            // await Trucs.find({ month: req.query.qMonth, year: req.query.qYear }, function (err, results) {
            //     if (err) {
            //         throw err
            //     }
            //     results.forEach(function (row) {
            //         temp_history.push({ 'date': row.date, 'month': row.month, 'year': row.year, 'noHours': row.noHours })
            //     })
            //     res.status(200).send(temp_history)
            // })
            res.status(200).send(temp_history)
        }
    })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login')
}