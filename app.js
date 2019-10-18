var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const database = require('./database');

var app = express();
const userHandler = require('./handler/user');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/users').post(function (req, res, next) {
  userHandler.storeUserData(req, res, next)
});

app.route('/users/:id').get(function (req, res, next) {
  userHandler.fetchUserData(req, res, next)
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next();
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

// db connection
database.connect();

module.exports = app;
