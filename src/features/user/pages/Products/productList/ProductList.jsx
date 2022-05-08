import './productList.scss';
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ItemCard from '../../../../../components/common/itemCard/ItemCard';
import { getProductByCategory } from '../../../../../api/userAPI';
import { Link } from 'react-router-dom';

const ProductList = ({ handleAdd, product, item }) => {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    getProductByCategory({ item, size: 4 }).then((data) => setListItem(data));
  }, [item]);
  return (
    <Box>
      <Box className="category-title">
        <Typography variant="h6" className="category-name">
          {item}
        </Typography>
        <Box className="category-showmore">
          <Link to={`/${item}`}>Show more...</Link>
        </Box>
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 2, xl: '10px' }}
        columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
      >
        {listItem?.result &&
          listItem?.result.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <ItemCard {...item} handleAdd={() => handleAdd(item)} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default ProductList;
