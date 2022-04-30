import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ItemCart = ({
  item,
  itemCartInfo,
  total,
  price,
  quantity,
  handleAdd,
  handleRemove,
  handleClose,
}) => {
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        className="CartItem-container"
      >
        <Box gridColumn="span 2" className="CartItem">
          <Box>
            <img src={itemCartInfo.images[0].url} alt={itemCartInfo.name} />
          </Box>
        </Box>
        <Box gridColumn="span 3" className="CartItem">
          <Box>{itemCartInfo.name}</Box>
        </Box>
        <Box gridColumn="span 2" className="CartItem">
          <Box>{price} $</Box>
        </Box>
        <Box gridColumn="span 3" className="CartItem">
          <Box>
            <Button
              disabled={total === 0 ? true : false}
              onClick={() => handleRemove(item)}
              className="CartItem--quanity-btn"
            >
              -
            </Button>
            <Typography>{quantity}</Typography>
            <Button
              onClick={() => handleAdd(item)}
              className="CartItem--quanity-btn"
            >
              +
            </Button>
          </Box>
        </Box>
        <Box gridColumn="span 2" className="CartItem" position="relative">
          <Box>{total} $</Box>
          <span className="CardItem-Close" onClick={() => handleClose(item)}>
            X
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCart;
