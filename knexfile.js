require('dotenv').config();
const path = require('path');

const config = {
  client: 'pg',
  connection: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  migrations: {
    directory: path.join(__dirname, 'db/migrations'),
    tableName: 'migrations',
  },
};

if (process.env.NODE_ENV === 'production') {
  config.connection = process.env.DATABASE_URL;
}

module.exports = config;
