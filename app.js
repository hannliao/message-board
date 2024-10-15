const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');
const openRouter = require('./routes/open');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/open', openRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
