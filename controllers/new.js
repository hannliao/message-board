const { v4: uuidv4 } = require('uuid');
const messages = require('../db');

module.exports = {
  get: (req, res) => {
    res.render('form');
  },
  post: (req, res) => {
    messages.unshift({
      id: uuidv4(),
      text: req.body.messageText,
      user: req.body.messageUser,
      added: new Date().toLocaleString(),
    });
    res.redirect('/');
  },
};
