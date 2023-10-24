import { createSlice } from "@reduxjs/toolkit";
import { createPost, getAllPosts, updatePost, deletePost } from "../thunks/postThunks";

const postSlice = createSlice({
  name: "post",
  initialState: {
    data: null,
    loading: false,
    error: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    // Create Post
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Get All Posts
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Posts
    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Delete Post
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;