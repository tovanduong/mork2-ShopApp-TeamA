import { toast } from 'react-toastify';
import { POST_LOGIN, POST_SIGNUP, POST_FORGOT, POST_SEND_VERIFY_EMAIL, POST_VERIFY_EMAIL } from '../constants/SubUrl/';
import axiosClient from './axiosClient';

export function postLogin({ password, email, deviceId }) {
    return axiosClient.post(POST_LOGIN, {
        password,
        email,
        deviceId,
    })
        .then(res => {
            toast.success('Login Success')
            return res.data
        })
        .catch(err => {
            toast.error(`Login Error: ${err.response.data.message}`)
        })
}

export function postSignUp({ username, password, email }) {
    return axiosClient.post(POST_SIGNUP, {
        username,
        email,
        password,
    })
        .then(res => {
            toast.success('Sign Up Success')
            return res.data
        })
        .catch(err => {
            toast.error(`Sign Up Error: ${err.response.data.message}`)
        })
}

export function postForgot({ email }) {
    return axiosClient.post(POST_FORGOT, {
        email,
    })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}


export function postSendVerify({ deviceId }) {
    return axiosClient.post(POST_SEND_VERIFY_EMAIL, {
        deviceId,
    })
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

export function postVerify({ token, deviceId }) {
    return axiosClient.post(POST_VERIFY_EMAIL + token, {
        deviceId,
    })
        .then(res => {
            toast.success('Verify Success')
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}