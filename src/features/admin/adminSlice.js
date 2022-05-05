// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import productApi from '../../api/productApi';

// export const getListQuestionByUser = createAsyncThunk('admin/getListQuestion', async (params) => {
//   const response = await questionsApi.userGetQuestions(params);
//   return response;
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     current: {},
//     loading: false,
//     error: '',
//   },
//   reducers: {},
//   extraReducers: {
//     // handle get list question
//     [getListQuestionByUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [getListQuestionByUser.fulfilled]: (state, action) => {
//       state.error = '';
//       state.loading = false;
//       state.current = action.payload;
//     },
//     [getListQuestionByUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.error;
//     },

//     // handle user submit answers
//     [userSubmitAnswers.pending]: (state) => {
//       state.loading = true;
//     },
//     [userSubmitAnswers.fulfilled]: (state, action) => {
//       state.error = '';
//       state.loading = false;
//       state.current = action.payload;
//     },
//     [userSubmitAnswers.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.error;
//     },
//   },
// });

// const { reducer, actions } = userSlice;
// export const {} = actions;
// export default reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProduct } from '../../api/userAPI';

export const getListProduct = createAsyncThunk('product/getListProduct', async (params) => {
  const response = await getAllProduct(params);
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
    // handle get list question
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
  },
});

const { reducer, actions } = productListSlice;
export const {} = actions;
export default reducer;
