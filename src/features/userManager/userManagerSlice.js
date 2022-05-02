import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userManager from '../../api/userManager';

export const postCreateUser = createAsyncThunk('userManager/postCreateUser', async (params) => {
  const response = await userManager.postCreateUser(params);
  return response;
});

const userManagerSlice = createSlice({
  name: 'userManager',
  initialState: {
    current: {},
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // handle get list question
    [postCreateUser.pending]: (state) => {
      state.loading = true;
    },
    [postCreateUser.fulfilled]: (state, action) => {
      state.error = '';
      state.loading = false;
      state.current = action.payload;
    },
    [postCreateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer, actions } = userManagerSlice;
export const {} = actions;
export default reducer;
