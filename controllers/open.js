const messages = require('../db');

module.exports = {
  get: (req, res) => {
    let messageId = req.params.id;
    let message = messages.find((message) => message.id == messageId);

    res.render('open', { message: message });
  },
};
