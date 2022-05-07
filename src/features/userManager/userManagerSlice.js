import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import userManager from '../../api/userManager';

export const getUserById = createAsyncThunk('users/getUserById', async (userId) => {
  const response = await userManager.adminGetUserById(userId);

  return response;
});

export const getAllUsers = createAsyncThunk('users/getAllUsers', async (params) => {
  const response = await userManager.getAllUsers(params);
  return response;
});

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

    //get all users
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.error = '';
      state.loading = false;
      state.current = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    //create user
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
