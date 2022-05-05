import { Box } from '@mui/material';
import React from 'react';

const ItemCartCheckOut = ({ quantity, total, itemCartInfo }) => {
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        className="CheckOut-ItemCart-Container"
      >
        <Box gridColumn="span 3" className="CheckOut-ItemCart">
          <img src={itemCartInfo.images[0].url} alt={itemCartInfo.name} />
        </Box>
        <Box gridColumn="span 6" className="CheckOut-ItemCart">
          <Box className="CheckOut-ItemCart-name">{itemCartInfo.name}</Box>
          <Box className="CheckOut-ItemCart-quantity">Qty: {quantity}</Box>
        </Box>
        <Box gridColumn="span 3" className="CheckOut-ItemCart">
          {total} $
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCartCheckOut;
