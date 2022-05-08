import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../../../../components/common/itemCard/ItemCard';
import { fetchGetAllProduct } from '../../userSlice';

export default function Products({ handleAdd }) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchGetAllProduct());
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2, xl: '10px' }}
      columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
    >
      {product?.result &&
        product?.result.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <ItemCard {...item} handleAdd={() => handleAdd(item)} />
            </Grid>
          );
        })}
    </Grid>
  );
}
