const messages = require('../db');

module.exports = {
  get: (req, res) => {
    res.render('form', { title: 'New Message' });
  },
  post: (req, res) => {
    messages.push({
      text: req.body.messageText,
      user: req.body.messageUser,
      added: new Date(),
    });
    res.redirect('/');
  },
};
