import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postLogin, postSendVerify, postSignUp, postVerify } from '../../api/authApi';

const initialState = {
    login: '',
    status: '',
    loading: false,
    signUp: ''
}

export const fetchLogin = createAsyncThunk(
    "users/postLogin",
    async (payload) => {
        const response = await postLogin(payload)

        const { user } = response
        localStorage.setItem('user', JSON.stringify(user))

        if (response.tokens) {
            const { tokens } = response
            localStorage.setItem('access_token', JSON.stringify(tokens))
        }

        return response
    }
);


export const fetchSignUp = createAsyncThunk(
    "users/postSignUp",
    async (payload) => {
        const response = await postSignUp(payload)
        return response
    }
);

export const fetchSendVerifyEmail = createAsyncThunk(
    "users/postSendVerify",
    async (payload) => {
        const response = await postSendVerify(payload)
        return response
    }
);

export const fetchPostVerify = createAsyncThunk(
    "users/postSendVerify",
    async (payload) => {
        const response = await postVerify(payload)
        return response
    }
);

export const AuthSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },

    extraReducers: {
        [fetchLogin.pending]: (state) => {
            state.status = 'loading';
            state.loading = true
        },

        [fetchLogin.fulfilled]: (state, action) => {
            state.status = 'success';
            state.login = action.payload;
            state.loading = false;
        },
        [fetchSignUp.fulfilled]: (state, action) => {
            state.status = 'sign up success';
            state.signUp = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
// export const { } = AuthSlice.actions

export default AuthSlice.reducer