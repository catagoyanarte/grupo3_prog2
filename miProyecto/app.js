var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mainRoutes = require('./routes/index');
const productsRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

var app = express();

// view engine setup..
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "miapp",
  resave: false,
  saveUninitialized : true
}));

// middleware de session hacia vistas
app.use(function(req, res, next) {
  // que quiero hacer en cada ida y vuelta 
  if ( req.session.user != undefined) {
        res.locals.user = req.session.user;
  }
  return next();
});

// middleware de cookies hacia vistas
app.use(function(req, res, next) {
  // que quiero hacer en cada ida y vuelta 

  if (req.cookies.user != undefined && req.session.user == undefined) {
    res.locals.user = req.cookies.user;
    req.session.user = req.cookies.user;
  }
  return next();
})

app.use('/', mainRoutes);
app.use('/users', userRoutes);
app.use('/products', productsRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
