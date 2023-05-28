const dotenv = require('dotenv');
dotenv.config();
const { protect } = require('./modules/auth');
const cors = require('cors');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');
var commentsRouter = require('./routes/comments');
var categoriesRouter = require('./routes/categories');

var app = express();

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// view engine setup		
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(
	cors({
		origin: 'http://127.0.0.1:5173',
	})
); // CORS
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', protect, articlesRouter);
app.use('/comments', protect, commentsRouter);
app.use('/categories', protect, categoriesRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
// 	next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render('error');
// });

module.exports = app;
