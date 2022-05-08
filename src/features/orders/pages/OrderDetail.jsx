import { Box, Breadcrumbs, Button, CircularProgress, Link, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import './orderDetail.scss';

export default function OrderDetail() {
  const { orderID } = useParams();

  return (
    <Box className="orderDetailWrapper">
      <div className="breadCrumbsWrapper" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/user">Order</Link>
          <Typography> Order #{orderID}</Typography>
        </Breadcrumbs>
      </div>

      <div className="titleOrderDetail">
        <h1 style={{ marginBottom: 0 }}>Order Detail #{orderID}</h1>
        <p className="orderID">Order ID: #{orderID}</p>
      </div>

      <Box className="formWrapper">hello</Box>
    </Box>
  );
}
