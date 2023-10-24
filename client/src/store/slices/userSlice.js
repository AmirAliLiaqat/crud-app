import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, deleteUser, updateUser } from '../thunks/UserThunks';

const initialState = {
  data: {
    user: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))
  },
  loading: false,
  error: null, 
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register User
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Login User
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    
    // Delete User
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    
    // Update User
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
