import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../../api/productApi';

export const getListCategory = createAsyncThunk('category/getListCategory', async (params) => {
  const response = await productApi.getAllCategories();
  return response;
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    current: {},
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // handle get list question
    [getListCategory.pending]: (state) => {
      state.loading = true;
    },
    [getListCategory.fulfilled]: (state, action) => {
      state.error = '';
      state.loading = false;
      state.current = action.payload;
    },
    [getListCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer, actions } = categorySlice;
export const {} = actions;
export default reducer;
