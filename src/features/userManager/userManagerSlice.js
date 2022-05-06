import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { adminGetUserById } from '../../api/userManager';

export const getUserById = createAsyncThunk('users/getUserById', async (userId) => {
  const response = await adminGetUserById(userId);

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
    // handle get user by id
    [getUserById.pending]: (state) => {
      state.loading = true;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.error = '';
      state.loading = false;
      state.current = action.payload;
    },
    [getUserById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer, actions } = userManagerSlice;
export const {} = actions;
export default reducer;
