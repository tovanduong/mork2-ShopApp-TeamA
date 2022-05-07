import { Box } from '@mui/material';
import React from 'react';
import FreeShipping from '../../../assets/images/freeshipping.svg';
import './benefit.scss';

export default function Benefit() {
  return (
    <Box className="benefitWrapper">
      <Box className="benefitItem">
        <img src={FreeShipping} alt="cart" />
        <div className="benefitContent">
          <h2>Free Shipping</h2>
          <p>For orders from %50</p>
        </div>
      </Box>
      <Box className="benefitItem">
        <img src={FreeShipping} alt="cart" />
        <div className="benefitContent">
          <h2>Free Shipping</h2>
          <p>For orders from %50</p>
        </div>
      </Box>
      <Box className="benefitItem">
        <img src={FreeShipping} alt="cart" />
        <div className="benefitContent">
          <h2>Free Shipping</h2>
          <p>For orders from %50</p>
        </div>
      </Box>
      <Box className="benefitItem">
        <img src={FreeShipping} alt="cart" />
        <div className="benefitContent">
          <h2>Free Shipping</h2>
          <p>For orders from %50</p>
        </div>
      </Box>
    </Box>
  );
}
