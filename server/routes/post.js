import express from "express";
import { createPost, getAllPosts, updatePost, deletePost } from "../controllers/post.controller.js";
import { authenticate } from '../middleware/authenticate.js';

const postRouter = express.Router();

postRouter.post('/create', authenticate, createPost);
postRouter.get('/getAllPosts', authenticate, getAllPosts);
postRouter.patch('/update', authenticate, updatePost);
postRouter.delete('/delete', authenticate, deletePost);

export default postRouter;