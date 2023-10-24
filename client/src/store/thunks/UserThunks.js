import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

// register user
export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/register", userData);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// login user
export const loginUser = createAsyncThunk(
  "loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/login", userData);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// update user
export const updateUser = createAsyncThunk(
  "updateUser",
  async ({userId, values}, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/user/${userId}`, {
        ...values
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// delete user
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/user/${userId}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);