const db = require('../db/queries');

module.exports = {
  async get(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', { messages });
  },
};
