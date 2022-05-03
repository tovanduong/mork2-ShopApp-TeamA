import { Box } from "@mui/material";
import React from "react";
import ItemCart from "./ItemCart";
import "./ItemCart.scss";

function Cart({ cartItems, handleAdd, handleRemove, handleClose }) {

    return (
      <Box mb="44px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          className="CartItemTitle-container"
        >
          <Box gridColumn="span 2" className="CartItemTitle">
            Image
          </Box>
          <Box gridColumn="span 3" className="CartItemTitle">
            Product
          </Box>
          <Box gridColumn="span 2" className="CartItemTitle">
            Price
          </Box>
          <Box gridColumn="span 3" className="CartItemTitle">
            Quantity
          </Box>
          <Box gridColumn="span 2" className="CartItemTitle">
            Total
          </Box>
        </Box>
        {cartItems &&
          cartItems?.items.map((item, index) => (
            <Box key={index}>
              <ItemCart
                {...item}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                item={item}
                handleClose={handleClose}
              />
            </Box>
          ))}
      </Box>
    );
}

export default Cart;
