import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  POST_CREATE_USER,
  POST_UPLOAD_IMAGE,
} from '../constants/SubUrl';
import axiosClient from './axiosClient';

const userManager = {
  getAllUsers: (params) => {
    const url = GET_ALL_USERS;
    return axiosClient.get(url, params);
  },
  postCreateUser: (params) => {
    const url = POST_CREATE_USER;
    return axiosClient.post(url, params);
  },
  postUploadImage: (params) => {
    const url = POST_UPLOAD_IMAGE;
    return axiosClient.post(url, params);
  },
  getUserById: (id, params) => {
    const url = `${GET_USER_BY_ID}/${id}`;
    return axiosClient.get(url, params);
  },
};

export default userManager;
