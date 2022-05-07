import { DELETE_PRODUCT_BY_ID, GET_ALL_CATEGORIES, GET_PRODUCT_BY_ID } from '../constants/SubUrl';
import axiosClient from './axiosClient';

const productApi = {
  kgetAllCategories: (params) => {
    const url = GET_ALL_CATEGORIES;
    return axiosClient.get(url, { params });
  },
  deleteProductById({ id }) {
    return axiosClient
      .delete(DELETE_PRODUCT_BY_ID + id)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getProductById: (id, params) => {
    const url = `${GET_PRODUCT_BY_ID}/${id}`;
    return axiosClient.get(url, params);
  },
};

export default productApi;
