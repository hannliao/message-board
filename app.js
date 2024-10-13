const express = require('express');
const app = express();
const path = require('node:path');
const router = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', router);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
