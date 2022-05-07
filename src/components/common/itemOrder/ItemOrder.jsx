import './itemOrder.scss';
import React from 'react';
import { Box } from '@mui/material';
import dateFormat from 'dateformat';

const ItemOrder = ({ id, createdAt, status, totalPrice }) => {
  return (
    <Box>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="myInfo-order-container">
        <Box gridColumn="span 2" className="myInfo-order-item">
          {id}
        </Box>
        <Box gridColumn="span 4" className="myInfo-order-item">
          {dateFormat(createdAt, 'mm/dd/yyyy')}
        </Box>
        <Box gridColumn="span 4" className="myInfo-order-item">
          {status}
        </Box>
        <Box gridColumn="span 2" className="myInfo-order-item">
          {totalPrice}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemOrder;
