import { GET_ALL_CATEGORIES } from '../constants/SubUrl';
import axiosClient from './axiosClient';

const productApi = {
  getAllCategories: (params) => {
    const url = GET_ALL_CATEGORIES;
    return axiosClient.get(url, { params });
  },
};

export default productApi;
