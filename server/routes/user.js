import express from "express";
import { registerUser, loginUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { authenticate } from '../middleware/authenticate.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.patch('/:userId', authenticate, updateUser);
userRouter.delete('/:userId', authenticate, deleteUser);

export default userRouter;