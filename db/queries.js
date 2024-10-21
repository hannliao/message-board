const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query(
    'SELECT * FROM messages ORDER BY added DESC;'
  );
  return rows;
}

async function createMessage(message) {
  await pool.query(
    'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)',
    [message.text, message.username, message.added]
  );
}

async function getMessage(id) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ${id};`);
  return rows[0];
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessage,
};
