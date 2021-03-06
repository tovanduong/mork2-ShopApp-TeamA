import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Rate from '../rate/Rate';
import './ItemCard.scss';
import AddCart from '../../../assets/images/icon/AddCart.png';

const ItemCard = ({ name, id, rating, images, price, handleAdd }) => {
  return (
    <Box className="ItemCard">
      <Box className="ItemCard-Image">
        <RouterLink to={`/product/${id}`}>
          <img src={images[0].url} alt={name} />
        </RouterLink>
      </Box>
      <Box className="ItemCard-Descriptions">
        <Box className="ItemCard--Descriptions-name">
          <RouterLink style={{ textDecoration: 'none', color: '#000' }} to={`/product/${id}`}>
            {name}
          </RouterLink>
        </Box>
        <Box className="ItemCard--Descriptions-id">ID: {id}</Box>
        <Box className="ItemCard--Descriptions-group">
          <Box className="ItemCard-rate">
            <Rate propsRate={rating} />
          </Box>
          <Box className="ItemCard-discount">50% Off</Box>
        </Box>
      </Box>
      <Box className="ItemCard-PriceCard">
        <Box className="ItemCard-price"> $ {price}</Box>
        <Box className="ItemCard-cart" onClick={() => handleAdd()}>
          <img src={AddCart} alt="cart" />
        </Box>
      </Box>
      <Box className="ItemCard-Available">
        <Link style={{ textDecoration: 'none' }} className="ItemCard-btn">
          Available
        </Link>
      </Box>
    </Box>
  );
};

export default ItemCard;
