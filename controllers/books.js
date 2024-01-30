import pool from "../db/server.js";

export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};
export const createUser= async (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;
    const result = await pool.query('INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3)', [first_name, last_name,age]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
}
export const updateUser= async (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;
    const { id } = req.params;
    const result = await pool.query('UPDATE users SET first_name = $1, last_name = $2, age = $3 WHERE id = $4', [first_name, last_name, age, id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
}
export const deleteUser= async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
}