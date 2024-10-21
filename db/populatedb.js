#! /usr/bin/env node
require('dotenv').config();

const { Client } = require('pg');
const messages = require('./messages');
const databaseURL = process.env.DATABASE_URL;

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255),
    username VARCHAR (255),
    added TIMESTAMP
  );
`;

const insertSQL = `
INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)`;

async function main() {
  console.log('seeding...');

  const client = new Client({
    connectionString: databaseURL,
  });

  try {
    await client.connect();
    const res = await client.query('SELECT current_database()');
    console.log('connected to database: ', res.rows[0].current_database);
  } catch (err) {
    console.error('error connecting to the database: ', err);
  }

  try {
    await client.query(SQL);
    for (const message of messages) {
      await client.query(insertSQL, [
        message.text,
        message.username,
        message.added,
      ]);
    }
    console.log('table created!');
  } catch (err) {
    console.error(err);
  }

  await client.end();
  console.log('done');
}

main();
