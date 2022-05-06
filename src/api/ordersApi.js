import { GET_ORDERS_BY_ADMIN } from '../constants/SubUrl/orders';
import axiosClient from './axiosClient';

export function getOrdersByAdmin(params) {
  return axiosClient
    .get(GET_ORDERS_BY_ADMIN, { params })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
