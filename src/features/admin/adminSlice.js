import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../../api/productApi';
import { getAllProduct } from '../../api/userAPI';

export const getListProduct = createAsyncThunk('product/getListProduct', async (params) => {
  const response = await getAllProduct(params);
  return response;
});
export const deleteProductById = createAsyncThunk('product/getListProduct', async (params) => {
  const response = await productApi.deleteProductById(params);
  return response;
});
const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    current: {},
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [getListProduct.pending]: (state) => {
      state.loading = true;
    },
    [getListProduct.fulfilled]: (state, action) => {
      state.error = '';
      state.loading = false;
      state.current = action.payload;
    },
    [getListProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteProductById.pending]: (state) => {
      state.loading = true;
    },
    [deleteProductById.fulfilled]: (state, action) => {
      state.error = '';
      state.loading = false;
      state.current = action.payload;
    },
    [deleteProductById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer, actions } = productListSlice;
export const {} = actions;
export default reducer;
