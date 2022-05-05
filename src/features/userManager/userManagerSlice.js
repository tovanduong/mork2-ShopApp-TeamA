import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userManager from '../../api/userManager';

export const postCreateUser = createAsyncThunk('userManager/postCreateUser', async (params) => {
  const response = await userManager.postCreateUser(params);
  return response;
});

export const patchUpdateUser = createAsyncThunk(
  'userManager/patchUpdateUser',
  async (id, params) => {
    const response = await userManager.patchUpdateUser(id, params);
    return response;
  }
);

const userManagerSlice = createSlice({
  name: 'userManager',
  initialState: {
    current: {},
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // handle create user
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

    // handle update user
    [patchUpdateUser.pending]: (state) => {
      state.loading = true;
    },
    [patchUpdateUser.fulfilled]: (state, action) => {
      state.error = '';
      state.loading = false;
      state.current = action.payload;
    },
    [patchUpdateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer, actions } = userManagerSlice;
export const {} = actions;
export default reducer;
