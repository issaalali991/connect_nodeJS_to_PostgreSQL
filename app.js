import express from 'express';
import pool from './db/server.js';
import usersRouter from './routes/usersRouter.js';



const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', usersRouter);




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
