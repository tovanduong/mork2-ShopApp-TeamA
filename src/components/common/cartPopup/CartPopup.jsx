import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGetCartById } from '../../../features/user/userSlice';
import ItemCartPopup from './ItemCartPopup';
import './itemCartPopup.scss';

const CartPopup = () => {
  const { isUpdate } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const getId = JSON.parse(localStorage.getItem('createCartUser'));
  const item = JSON.parse(localStorage.getItem('cartUser'));
  useEffect(() => {
    if (getId) dispatch(fetchGetCartById({ id: getId?.cart.id }));
  }, [isUpdate]);
  const isLogin = Boolean(localStorage.getItem('access_token'));
  console.log(item);
  const getSubTotal = () => {
    const total = item?.items?.reduce((price, item) => price + item.total, 0);
    return total;
  };
  return (
    <Box>
      {item?.items.map((item) => {
        return <ItemCartPopup {...item} />;
      })}
      <Box className="CartPopup-container">
        <Box className="CartPopup-item">
          <Typography variant="subtitle1">Subtotal</Typography>
          <Typography variant="body1">{getSubTotal() ? getSubTotal() : 0} $</Typography>
        </Box>
        <Box className="CartPopup-item">
          <Typography variant="subtitle1">Shipping</Typography>
          <Typography variant="body1">
            {getSubTotal() === 0 || getSubTotal() === undefined ? 0 : 20} $
          </Typography>
        </Box>
        <Box className="CartPopup-item">
          <Typography variant="h6">Total</Typography>
          <Typography variant="body1">
            {getSubTotal() === 0 || getSubTotal() === undefined ? 0 : getSubTotal() + 20}$
          </Typography>
        </Box>
        <Box className="CartPopup-btn">
          <Box>
            <Link className="CartPopup-btn-Checkout" to={isLogin ? '/cart' : '/'}>
              View Cart
            </Link>
          </Box>
          <Button>
            <Link className="CartPopup-btn-Checkout" to={`/cart/${item?.cart.id}`}>
              Checkout
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPopup;
