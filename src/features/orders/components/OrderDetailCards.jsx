import { Box } from '@material-ui/core';
import React from 'react';
import './orderDetailCards.scss';
import user_admin from '../../../assets/images/user_admin.svg';
import truck from '../../../assets/images/truck.svg';
import map_pin from '../../../assets/images/map-pin.svg';

export default function OrderDetailCards({ orderDetail }) {
  return (
    <Box className="orderDetailCardsWrapper">
      <Box className="cardItemWrapper">
        <div className="cardImgWrapper">
          <img className="cardIcon" src={user_admin} alt="icon" />
        </div>
        <Box className="cardContent">
          <h4 className="cardTitle">Customer</h4>
          <p className="firstDetail">Name: Lady Gaga</p>
          <p className="secondDetail">Email: ladygaga@gmail.com</p>
          <p className="thirdDetail">Phone: {orderDetail.contact}</p>
        </Box>
      </Box>
      <Box className="cardItemWrapper">
        <div className="cardImgWrapper">
          <img className="cardIcon" src={truck} alt="icon" />
        </div>
        <Box className="cardContent">
          <h4 className="cardTitle">Order Info</h4>
          <p className="firstDetail">Status: {orderDetail.status}</p>
          <p className="secondDetail">Pay method: {orderDetail.paymentMethod}</p>
          <p className="thirdDetail">Paided: {orderDetail.isPaid ? 'Yes' : 'No'}</p>
        </Box>
      </Box>
      <Box className="cardItemWrapper">
        <div className="cardImgWrapper">
          <img className="cardIcon" src={map_pin} alt="icon" />
        </div>
        <Box className="cardContent">
          <h4 className="cardTitle">Deliver to</h4>
          <p className="firstDetail">Address: {orderDetail.address}</p>
          <p className="secondDetail">Contact: 0987126251</p>
          <p className="thirdDetail">Shipper: GHTK</p>
        </Box>
      </Box>
    </Box>
  );
}
