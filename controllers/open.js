const messages = require('../db');
const NotFoundError = require('../errors/NotFoundError');

module.exports = {
  get: (req, res) => {
    let messageId = req.params.id;
    let message = messages.find((message) => message.id == messageId);

    if (!message) {
      throw new NotFoundError('Message not found');
    }

    res.render('open', { message });
  },
};
