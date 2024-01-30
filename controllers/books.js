import pool from "../db/server.js";


// -----------USERS CONTROLLERS----------------
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


// ------------ORDERS CONTROLLERS----------------
export const getAllOrders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
}
export const createOrder= async (req, res) => {
  try {
    const { price, date, user_id } = req.body;
    const result = await pool.query('INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3)', [price, date, user_id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
}
export const updateOrder= async (req, res) => {
  try {
    const { price, date, user_id } = req.body;
    const { id } = req.params;
    const result = await pool.query('UPDATE orders SET price = $1, date = $2, user_id = $3 WHERE id = $4', [price, date, user_id, id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
}
export const deleteOrder= async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM orders WHERE id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
}
