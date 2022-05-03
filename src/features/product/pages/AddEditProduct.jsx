import { Box } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductForm from '../components/ProductForm';
import { getListCategory } from '../productsSlice';

export default function AddEditProduct() {
  const dispatch = useDispatch();

  const [listCategory, setListCategory] = useState();

  // get all categories
  useEffect(() => {
    const fetchListCategory = async () => {
      try {
        const listCategory = await dispatch(getListCategory());

        unwrapResult(listCategory);
        console.log(listCategory);

        // setListCategory(listUser.payload.results);
      } catch (error) {
        console.log('failed to fetch product list: ', error);
      }
    };

    fetchListCategory();
  }, [dispatch]);

  const ratingOptions = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
  ];

  const initialValues = {
    name: '',
    description: '',
    price: '',
    discountPercent: '',
    brand: '',
    stockQuantity: '',
    images: '',
    category: [],
    rating: '',
  };

  const handleProductFormSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <Box mt={4} mb={8}>
      <ProductForm
        initialValues={initialValues}
        ratingOptions={ratingOptions}
        onSubmit={handleProductFormSubmit}
      />
    </Box>
  );
}
