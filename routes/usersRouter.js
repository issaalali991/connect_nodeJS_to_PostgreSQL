import { Router } from "express";
import { createOrder, createUser, deleteOrder, deleteUser, getAllOrders, getAllUsers, getOrderById, getUserById, updateOrder, updateUser } from "../controllers/books.js";

const usersRouter = Router();

usersRouter.route('/users').get(getAllUsers).post(createUser);
usersRouter.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);
usersRouter.route('/orders').get(getAllOrders).post(createOrder);
usersRouter.route('/orders/:id').get(getOrderById).put(updateOrder).delete(deleteOrder);

export default usersRouter;