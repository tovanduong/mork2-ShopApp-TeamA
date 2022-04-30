import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productsSlice';
import userManagerReducer from '../features/userManager/userManagerSlice';
import AuthReducer from '../features/auth/authSlice';
import UserReducer from '../features/user/userSlice';
const rootReducer = {
  product: productReducer,
  userManager: userManagerReducer,
  auth: AuthReducer,
  user: UserReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
