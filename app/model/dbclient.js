const { Client } = require('pg');
require('dotenv').config();

const user = process.env.DB_USER;
const database = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;

const client = new Client (`postgres://${user}:${password}@localhost:5432/${database}`)

client.connect()

module.exports = client;