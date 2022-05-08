import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { countRemove, fetchDelItem, fetchUpdateCart } from '../../../features/user/userSlice';
import './itemCartPopup.scss';

const ItemCartPopup = ({ itemCartInfo, price, quantity, total, item }) => {
  const dispatch = useDispatch();
  const handleClose = (item) => {
    const isCart = JSON.parse(localStorage.getItem('cartUser'));
    dispatch(fetchDelItem({ id: item.id }));

    dispatch(
      fetchUpdateCart({
        id: item.id,
        quantity: item.quantity,
        total: item.quantity,
      })
    );
    if (isCart.items.length === 0) {
      console.log('first');
      localStorage.removeItem('createCartUser');
    }
    dispatch(countRemove(quantity));
  };
  return (
    <Box className="Item-Group">
      <Box className="Item-Info">
        <Box className="Item-Info-img">
          <img src={itemCartInfo.images[0].url} alt={itemCartInfo.name} />
        </Box>
        <Box className="Item-Info-Group">
          <Typography variant="subtitle1" className="Item-Info-name">
            {itemCartInfo.name}
          </Typography>
          <Typography variant="subtitle1" className="Item-Info-totalPrice">
            {quantity} X {price}$
          </Typography>
        </Box>
        <Box className="closeItemPopUp" onClick={() => handleClose(item)}>
          X
        </Box>
      </Box>
      <hr />
    </Box>
  );
};

export default ItemCartPopup;
