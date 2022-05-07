import { Box, Breadcrumbs, Container, Grid, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCartCheckOut from './itemCartCheckOut';
import './checkOut.scss';
import ShippingForm from './shippingForm';
const CheckOut = () => {
  const getCart = JSON.parse(localStorage.getItem('cartUser'));
  const initialValue = {
    address: '',
    contact: '',
    email: '',
    paymentMethod: '',
  };
  const handleSubmitCheckOut = (value) => {
    console.log(value);
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
