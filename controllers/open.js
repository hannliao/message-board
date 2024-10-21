const db = require('../db/queries');
const NotFoundError = require('../errors/NotFoundError');

module.exports = {
  async get(req, res) {
    let messageId = req.params.id;
    let message = await db.getMessage(messageId);

    if (!message) {
      throw new NotFoundError('Message not found');
    }

    res.render('open', { message });
  },
};
