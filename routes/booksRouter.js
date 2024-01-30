import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/books.js";

const booksRouter = Router();

booksRouter.route('/').get(getAllUsers).post(createUser);
booksRouter.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default booksRouter;