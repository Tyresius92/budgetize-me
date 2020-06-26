import 'dotenv/config';
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
});

module.exports = {
  query: async (sql, params, callback) =>
    await pool.query(sql, params, callback),
  fetch: async (sql, params, callback) => {
    const response = await pool.query(sql, params, callback);
    return response.rows[0];
  },
  fetchAll: async (sql, params, callback) => {
    const response = await pool.query(sql, params, callback);
    return response.rows;
  },
};
