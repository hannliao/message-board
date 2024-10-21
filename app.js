require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');
const openRouter = require('./routes/open');
const NotFoundError = require('./errors/NotFoundError');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/open', openRouter);

app.use((req, res, next) => {
  const error = new NotFoundError('Page not found');
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500);
  res.render('error', { message: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on port ${PORT}...`);
});
