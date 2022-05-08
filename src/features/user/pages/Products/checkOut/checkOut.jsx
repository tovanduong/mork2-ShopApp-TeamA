import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchOrder } from '../../../userSlice';
import './checkOut.scss';
import ItemCartCheckOut from './itemCartCheckOut';
import ShippingForm from './shippingForm';
const CheckOut = () => {
  const getCart = JSON.parse(localStorage.getItem('cartUser'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValue = {
    address: '',
    contact: '',
    email: '',
    paymentMethod: 'Cash on delivery',
  };

  const handleSubmitCheckOut = (value) => {
    const total = getCart?.items?.reduce((price, item) => price + item.total, 0);
    const itemArr = getCart?.items?.map((item) => {
      return {
        productId: item.itemCartInfo.id,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
      };
    });
    const { address, paymentMethod, contact } = value;
    const orderCreate = {
      address: address,
      paymentMethod: paymentMethod,
      contact: contact,
      totalPrice: total,
      userId: getCart?.cart.userId,
    };

    dispatch(fetchOrder({ orderCreate, itemArr }));
    navigate('/');
  };
  return (
    <Container>
      <Box className="section-box">
        <Box className="breadCrum">
          <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link className="breadCrum-content" to="/">
                Home
              </Link>
              <Link color="text.primary" className="breadCrum-content" to="/cart">
                Shopping Cart
              </Link>
              <Typography color="text.primary" className="breadCrum-content">
                Check Out
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
        <Typography variant="h4" className="ShoppingCart__name">
          Check Out
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={{ xl: '10px' }} columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}>
          <Grid item xl={8} className="CheckOutItem-container">
            <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              className="CheckOutItemTitle-container"
            >
              <Box gridColumn="span 3" className="CheckOutItemTitle">
                Image
              </Box>
              <Box gridColumn="span 6" className="CheckOutItemTitle">
                Product
              </Box>
              <Box gridColumn="span 3" className="CheckOutItemTitle">
                Total
              </Box>
            </Box>
            {getCart.items &&
              getCart.items.map((item) => {
                return <ItemCartCheckOut {...item} key={item.id} />;
              })}
          </Grid>
          <Grid item xl={4}>
            <Box className="checkout-container">
              <ShippingForm
                getCart={getCart}
                initialValue={initialValue}
                onSubmit={handleSubmitCheckOut}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CheckOut;
