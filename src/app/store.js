import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productsSlice';
import userManagerReducer from '../features/userManager/userManagerSlice';
import AuthReducer from '../features/auth/authSlice';
import UserReducer from '../features/user/userSlice';
import AdminReducer from '../features/admin/adminSlice';
import CategoryReducer from '../features/category/categorySlice';

const rootReducer = {
  product: productReducer,
  userManager: userManagerReducer,
  auth: AuthReducer,
  user: UserReducer,
  admin: AdminReducer,
  category: CategoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
