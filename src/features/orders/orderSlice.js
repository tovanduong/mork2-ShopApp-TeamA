import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrdersByAdmin } from '../../api/ordersApi';

export const getAllOrders = createAsyncThunk('orders/getListOrders', async (params) => {
  const response = await getOrdersByAdmin(params);
  return response;
});
const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    current: {},
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [getAllOrders.pending]: (state) => {
      state.loading = true;
    },
    [getAllOrders.fulfilled]: (state, action) => {
      state.error = '';
      state.loading = false;
      state.current = action.payload;
    },
    [getAllOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer, actions } = orderSlice;
export const {} = actions;
export default reducer;
