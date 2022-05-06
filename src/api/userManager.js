import { GET_USER_BY_ID } from '../constants/SubUrl';
import axiosClient from './axiosClient';

// const userManager = {
//   // getAllCategories: (params) => {
//   //   const url = GET_ALL_CATEGORIES;
//   //   return axiosClient.get(url, { params });
//   // },
//   adminGetUserById: (userId, payload) => {
//     const url = GET_USER_BY_ID;
//     return axiosClient.get(`${url}${userId}`, { payload });
//   },

// };

// export default userManager;
export function adminGetUserById(userId) {
  return axiosClient
    .get(GET_USER_BY_ID + userId)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
