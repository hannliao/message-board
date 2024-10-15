const messages = require('../db');

module.exports = {
  get: (req, res) => {
    res.render('index', { messages });
  },
};
