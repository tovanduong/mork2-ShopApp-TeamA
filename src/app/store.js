import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productsSlice';
import userManagerReducer from '../features/userManager/userManagerSlice';

const rootReducer = {
  product: productReducer,
  userManager: userManagerReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
