var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var users = require('./routes/userRoutes');

const app = express()
const port = 3000


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log(`this runs on every time i make a request ${err}!`);
    next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use('/users', users);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


