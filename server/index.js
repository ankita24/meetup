const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const setupDB = require('./database');
const userRoutes = require('./routes/user')(passport);
const listRoutes = require('./routes/list');
const setupPassport = require('./passport');
setupPassport(passport);

const app = express();
const db = setupDB();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'ankita', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/status', function(req, res) {
  res.send('ok');
});

app.use('/user', userRoutes);
app.use('/list', listRoutes);

app.listen('8000', function(req, res) {
  console.log('server started on PORT 8000');
});
