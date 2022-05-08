import { GET_ORDERS_BY_ADMIN, GET_ORDER_BY_ID } from '../constants/SubUrl/orders';
import axiosClient from './axiosClient';

export function getOrdersByAdmin(params) {
  return axiosClient
    .get(GET_ORDERS_BY_ADMIN, { params })
    .then((res) => {
      return res.data.orders;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getOrderByID(id) {
  return axiosClient.get(`${GET_ORDER_BY_ID}/${id}`);
}
