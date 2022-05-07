import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  PATCH_UPDATE_USER,
  POST_CREATE_USER,
  POST_UPLOAD_IMAGE,
} from '../constants/SubUrl';
import axiosClient from './axiosClient';

const userManager = {
  getAllUsers(params) {
    return axiosClient
      .get(GET_ALL_USERS, { params })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  postCreateUser: (params) => {
    const url = POST_CREATE_USER;
    return axiosClient.post(url, params);
  },
  patchUpdateUser: (id, params) => {
    const url = `${PATCH_UPDATE_USER}/${id}`;
    return axiosClient.patch(url, params);
  },
  postUploadImage: (params) => {
    const url = POST_UPLOAD_IMAGE;
    return axiosClient.post(url, params);
  },
  getUserById: (id, params) => {
    const url = `${GET_USER_BY_ID}/${id}`;
    return axiosClient.get(url, params);
  },
  adminGetUserById(userId) {
    return axiosClient
      .get(`${GET_USER_BY_ID}/${userId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default userManager;
