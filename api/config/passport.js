var LocalStrategy = require('passport-local').Strategy
var User = require('../models/userModel')

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id)
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user)
        })
    })

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
        session: false
    },
        function (req, email, password, done) {

            User.findOne({ 'email': email }, function (err, user) {
                if (err)
                    return done(err)

                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.'))

                if (!(user.password == password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'))

                return done(null, user)
            })
        }))
}

