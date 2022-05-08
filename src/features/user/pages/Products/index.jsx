import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCate } from '../../../../api/userAPI';
import { fetchGetAllProduct } from '../../userSlice';
import ProductList from './productList/ProductList';

export default function Products({ handleAdd }) {
  const [cate, setCate] = useState([]);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchGetAllProduct());
    getCate().then((data) => setCate(data));
  }, []);
  const [item1, item2, item3] = cate;
  let list = [item1, item2, item3];
  return (
    <Box mb={3}>
      {list &&
        list.map((item, index) => {
          return (
            <Box key={index}>
              <ProductList handleAdd={handleAdd} product={product} item={item} />
            </Box>
          );
        })}
    </Box>
  );
}
