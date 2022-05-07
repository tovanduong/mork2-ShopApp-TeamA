import { GET_ALL_CATEGORIES, GET_PRODUCT_BY_ID } from '../constants/SubUrl';
import axiosClient from './axiosClient';

const productApi = {
  getAllCategories: (params) => {
    const url = GET_ALL_CATEGORIES;
    return axiosClient.get(url, { params });
  },
  getProductById: (id, params) => {
    const url = `${GET_PRODUCT_BY_ID}/${id}`;
    return axiosClient.get(url, params);
  },
};

export default productApi;
