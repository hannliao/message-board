const messages = require('../db');

module.exports = {
  get: (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  },
};
