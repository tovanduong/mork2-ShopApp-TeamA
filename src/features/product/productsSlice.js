import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../../api/productApi';

// export const getListCategory = createAsyncThunk('product/getListCategory', async (params) => {
//   const response = await productApi.getAllCategories();
//   return response;
// });

const productSlice = createSlice({
  name: 'product',
  initialState: {
    current: {},
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // handle get list question
    // [getListCategory.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getListCategory.fulfilled]: (state, action) => {
    //   state.error = '';
    //   state.loading = false;
    //   state.current = action.payload;
    // },
    // [getListCategory.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.error;
    // },
  },
});

const { reducer, actions } = productSlice;
export const {} = actions;
export default reducer;
