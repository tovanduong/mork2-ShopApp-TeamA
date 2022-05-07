import { DELETE_PRODUCT_BY_ID, GET_ALL_CATEGORIES } from '../constants/SubUrl';
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
};

export default productApi;
