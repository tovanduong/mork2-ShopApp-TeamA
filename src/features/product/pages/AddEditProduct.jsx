import { Box } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ratingOptions } from '../../../constants/admin';
import { getListCategory } from '../../category/categorySlice';
import ProductForm from '../components/ProductForm';

export default function AddEditProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const isEdit = Boolean(productId);

  // const [listCategory, setListCategory] = useState();

  // get all categories
  useEffect(() => {
    const fetchListCategory = async () => {
      try {
        const listCategory = await dispatch(getListCategory());

        unwrapResult(listCategory);

        // setListCategory(listCategory.payload.data);
      } catch (error) {
        console.log('failed to fetch product list: ', error);
      }
    };

    fetchListCategory();
  }, [dispatch]);

  const initialValues = {
    name: '',
    description: '',
    price: '',
    discountPercent: '',
    brand: '',
    stockQuantity: '',
    images: '',
    category: '',
    rating: '',
    imageUrls: '',
  };

  const handleProductFormSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <Box mt={4} mb={8}>
      <ProductForm
        initialValues={initialValues}
        ratingOptions={ratingOptions}
        productId={productId}
        isEdit={isEdit}
        // listCategory={listCategory}
        onSubmit={handleProductFormSubmit}
      />
    </Box>
  );
}
