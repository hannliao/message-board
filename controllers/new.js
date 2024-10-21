const db = require('../db/queries');

module.exports = {
  get: (req, res) => {
    res.render('form');
  },
  async post(req, res) {
    const message = {
      text: req.body.messageText,
      username: req.body.messageUsername,
      added: new Date().toLocaleString(),
    };
    await db.createMessage(message);
    res.redirect('/');
  },
};
