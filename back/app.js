
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const indexRouter = require('./routes/index');
const sqlhRouter = require('./routes/sql');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/sql', sqlhRouter);


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});


app.listen(5000, () => {
  console.log('Connected to port 5000');
});

module.exports = app;
