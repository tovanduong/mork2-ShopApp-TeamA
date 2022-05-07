import { Box, Typography } from '@mui/material';
import React from 'react';
import './itemCartPopup.scss';

const ItemCartPopup = ({ itemCartInfo, price, quantity, total }) => {
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
        <Box className="closeItemPopUp">X</Box>
      </Box>
      <hr />
    </Box>
  );
};

export default ItemCartPopup;
