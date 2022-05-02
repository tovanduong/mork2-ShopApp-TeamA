import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Button, Container } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CouponCodeForm from "../../../../../components/common/couponCode/CouponCodeForm";
import Cart from "../../../../../components/common/ItemCart/Cart";
import { fetchDelItem, fetchGetCartById } from "../../../userSlice";
import "./shoppingCart.scss";

const ShoppingCart = ({ handleAdd, handleRemove }) => {
  const [isdel, setIsDel] = useState(false);
  const { isUpdate } = useSelector((state) => state.user);
  var shipping = 20;
  const initialValue = {
    coupon: "",
  };
  const item = JSON.parse(localStorage.getItem("cartUser"));
  const dispatch = useDispatch();
  const handleSubmit = (value) => {
    console.log(value);
  };
  const getSubTotal = () => {
    // const item = JSON.parse(localStorage.getItem("cartUser"));
    const total = item?.items?.reduce((price, item) => price + item.total, 0);
    return total;
  };

  const getId = JSON.parse(localStorage.getItem("createCartUser"));

  useEffect(() => {
    dispatch(fetchGetCartById({ id: getId.cart.id }));
  }, [isUpdate]);

  const handleClose = (item) => {
    dispatch(fetchDelItem({ id: item.id }));
  };

  return (
    <Container>
      <Box pt="240px">
        <Box className="breadCrum">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link className="breadCrum-content" to="/">
                Home
              </Link>
              <Typography
                key="3"
                color="text.primary"
                className="breadCrum-content"
              >
                Shopping Cart
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>

        <Typography variant="h4" className="ShoppingCart__name">
          Shopping Cart
        </Typography>

        <Cart
          cartItems={item}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          getSubTotal={getSubTotal}
          handleClose={handleClose}
        />

        <Box display="flex" width="100%" justifyContent="space-between">
          <Box>
            <CouponCodeForm
              onSubmit={handleSubmit}
              initialValue={initialValue}
            />
          </Box>
          <Box className="shoppingCart-CardTotal">
            <Typography variant="h5" mb="30px">
              Cart Totals
            </Typography>
            <Box className="shoppingCart-CartItem">
              <Typography variant="subtitle1">Subtotal</Typography>
              <Typography variant="body1">{getSubTotal()} $</Typography>
            </Box>
            <Box className="shoppingCart-CartItem">
              <Typography variant="subtitle1">Shipping</Typography>
              <Typography variant="body1">
                {getSubTotal() === 0 ? 0 : shipping} $
              </Typography>
            </Box>
            <Box className="shoppingCart-CartItem">
              <Typography variant="h6">Total</Typography>
              <Typography variant="body1">
                {getSubTotal() === 0 ? 0 : getSubTotal() + shipping} $
              </Typography>
            </Box>
            <Box className="shoppingCart-CartItem">
              <Button>Proceed to checkout</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCart;