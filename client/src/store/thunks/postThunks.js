import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

// create post
export const createPost = createAsyncThunk(
  "createPost",
  async ({userId, post}, { rejectWithValue }) => {
    try {
      const response = await api.post(`/post/create`, {post}, {
        params: {
          userId
        }
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// get all posts
export const getAllPosts = createAsyncThunk(
  "getAllPosts",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/post/getAllPosts`, {
        params: {
          userId
        }
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// update post
export const updatePost = createAsyncThunk(
  "updatePost",
  async ({postId, post}, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/post/update`, {post}, {
        params: {
          postId
        }
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// delete post
export const deletePost = createAsyncThunk(
  "deletePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/post/delete`, {
        params: {
          postId
        }
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);