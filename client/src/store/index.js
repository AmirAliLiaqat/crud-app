import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import postReducer from './slices/postSlice';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
});
  
const store = configureStore({
    reducer: rootReducer,
});

export default store;