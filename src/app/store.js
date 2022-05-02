import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productsSlice';
import userManagerReducer from '../features/userManager/userManagerSlice';
import AuthReducer from '../features/auth/authSlice';
import UserReducer from '../features/user/userSlice';
import CategoryReducer from '../features/category/categorySlice';

const rootReducer = {
  product: productReducer,
  userManager: userManagerReducer,
  auth: AuthReducer,
  user: UserReducer,
  category: CategoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
