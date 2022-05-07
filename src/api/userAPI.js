import { toast } from 'react-toastify';
import {
  GET_PRODUCT,
  POST_VERIFY_EMAIL,
  GET_SEARCH_PRODUCT,
  POST_CREATE_CART,
  PATCH_UPDATE_CART,
  GET_CARD_BY_ID,
  POST_CREATE_ITEM,
  DELETE_ITEM_CART,
  GET_ALL_CATEGORY,
  POST_ORDER,
  GET_ORDER,
  PATCH_CONTACT,
  PATCH_EMAIL,
} from '../constants/SubUrl';
import axiosClient from './axiosClient';

export function postVerify({ token, deviceId }) {
  return axiosClient
    .post(POST_VERIFY_EMAIL + token, {
      deviceId,
    })
    .then((res) => {
      toast.success('Verify Success');
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getProductId(id) {
  return axiosClient
    .get(GET_PRODUCT + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getAllProduct() {
  return axiosClient
    .get(GET_PRODUCT)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getSearchProduct(value) {
  return axiosClient
    .get(GET_SEARCH_PRODUCT + value)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postCreateCart({ cart, itemArr }) {
  return axiosClient
    .post(POST_CREATE_CART, {
      cart,
      itemArr,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function patchUpdateCart({ quantity, total, id }) {
  return axiosClient
    .patch(PATCH_UPDATE_CART + id, {
      quantity,
      total,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getCartById({ id }) {
  return axiosClient
    .get(GET_CARD_BY_ID + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postItemToCart({ cartId, productId, quantity, price, total }) {
  return axiosClient
    .post(POST_CREATE_ITEM, {
      cartId,
      productId,
      quantity,
      price,
      total,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function delItem({ id }) {
  return axiosClient
    .delete(DELETE_ITEM_CART + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getCate() {
  return axiosClient
    .get(GET_ALL_CATEGORY)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postOrder({ orderCreate, itemArr }) {
  return axiosClient
    .post(POST_ORDER, {
      order: orderCreate,
      itemArr,
    })
    .then((res) => {
      toast.success('Order Success');
      return res.data;
    })
    .catch((err) => {
      toast.error(`Order Error: ${err.response.data.message}`);
    });
}

export function getOrder({ size, currentPage }) {
  return axiosClient
    .get(`${GET_ORDER}?size=${size}&page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function patchContact(contact) {
  return axiosClient
    .patch(PATCH_CONTACT, {
      contact: contact,
    })
    .then((res) => {
      toast.success('Update Success');
      return res.data;
    })
    .catch((err) => {
      toast.error('Update Fail');
      console.log(err);
    });
}

export function patchEmail(email) {
  return axiosClient
    .patch(PATCH_EMAIL, {
      email: email,
    })
    .then((res) => {
      toast.success('Update Success');
      return res.data;
    })
    .catch((err) => {
      toast.error('Update Fail');
      console.log(err);
    });
}
