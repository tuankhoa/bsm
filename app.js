//#region Library
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var morgan = require('morgan')
var passport = require('passport')
var flash = require('connect-flash')
var cookieParser = require('cookie-parser')
var session = require('express-session')
//#endregion Library

var app = express()
var port = process.env.PORT || 8080 
var server = app.listen(port)
// require socket.io and connect to server
var io = require('socket.io')(server)

//#region connect to mongoDB 
var config = require('./config')
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true })
    .then(
        function (res) {
            console.log("Connected to Database Successfully.")
        }
    )
    .catch(function () {
        console.log("Conntection to database failed.");
    })
//#endregion connect to mongoDB

//#region Middleware
app.use('/assets', express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))

app.set('view engine', 'ejs')

app.use(session({
    secret: 'xxxxxxxxxxxxx',
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
require('./api/config/passport')(passport)
//#endregion Middleware

// routes
var routes = require('./routes/routes')
routes(app, passport)

// communications
var communicationsServerAndClient = require('./api/communications/ServerAndClient')
communicationsServerAndClient(io)

