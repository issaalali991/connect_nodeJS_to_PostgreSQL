import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
  host: 'kandula.db.elephantsql.com',
  user:'qoxplzye',
  password: 'wv8ZYhGNs74sHDvY_KfqXDZv7WUxaN0l',
  port: process.env.DB_PORT,
});
pool.connect((err) => {
  if (err) {
    console.log('connection error', err.stack);
  } else {
    console.log('connected to ElephantSQL');
  }
});

export default pool;
