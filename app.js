import express from 'express';
import pool from './db/server.js';
import booksRouter from './routes/booksRouter.js';



const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/books', booksRouter);




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
