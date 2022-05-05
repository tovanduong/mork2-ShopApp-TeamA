import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Breadcrumbs, Button, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as yup from 'yup';
import {
  AdminInputField,
  ImportFileField,
  MultipleSelectedField,
  SelectField,
  TextAreaField,
} from '../../../components/FormFields';
import './productForm.scss';

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required().min(0, 'min is 0').typeError('please enter a valid number'),
  discountPercent: yup
    .number()
    .required()
    .min(0, 'min is 0')
    .max(100, 'max is 100%')
    .typeError('please enter a valid number'),
  brand: yup.string().required(),
  // imageUrls: yup.string().required('image is required'),
  stockQuantity: yup
    .number()
    .required()
    .min(1, 'min is 1')
    .typeError('please enter a valid number'),
  rating: yup.number().required().typeError('please select a valid number'),
  category: yup.string().required(),
});

export default function ProductForm({ initialValues, onSubmit, ratingOptions }) {
  const { productId } = useParams();
  const isEdit = Boolean(productId);
  const [selectedCategories, setSelectedCategories] = useState();
  const [imageProduct, setImageProduct] = useState(null);
  const listCategory = useSelector((state) => state.category.current.data);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleImportFileChange = (file) => {
    console.log(file);
    setImageProduct(file);
  };

  const handleClickMultipleSelect = (listCategorySelected) => {
    setSelectedCategories(listCategorySelected);
  };

  const handleFormSubmit = (formValues) => {
    console.log(formValues);
    const modifiedValues = { ...formValues, category: selectedCategories, imageProduct };
    onSubmit(modifiedValues);
  };

  return (
    <Box mx={4} className="addEditProductPageWrapper">
      <div className="breadCrumbsWrapper" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/product">Product</Link>
          <Typography> Create Product</Typography>
        </Breadcrumbs>
      </div>

      <div className="titleAndButtonProduct">
        <h1>{!isEdit ? 'Create Product' : `Update Product #${productId}`}</h1>
        <Box mt={3}>
          <Button
            className="btnAddEditAdmin"
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={handleSubmit(handleFormSubmit)}
          >
            {isSubmitting && <CircularProgress color="primary" size={16} />}

            {!isEdit ? 'Add Product' : 'Save'}
          </Button>
        </Box>
      </div>

      <form className="formWrapper">
        <Box className="basicInformation">
          <h3 className="titleProductForm">Basic information</h3>

          <div className="horizontalLine"></div>

          <div className="formField">
            <div style={{ marginBottom: '25px' }}>
              <AdminInputField name="name" type="string" control={control} label="Name" />
            </div>
            <TextAreaField
              style={{ marginBottom: '25px' }}
              name="description"
              type="string"
              control={control}
              label="Description"
            />
            <div style={{ marginBottom: '25px' }} className="priceAndDiscountField">
              <AdminInputField
                className="priceField"
                name="price"
                type="number"
                control={control}
                label="Price"
              />
              <AdminInputField
                className="discountPercentField"
                name="discountPercent"
                type="number"
                control={control}
                label="Discount Percent"
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <AdminInputField name="brand" type="string" control={control} label="Brand" />
            </div>
            <AdminInputField
              name="stockQuantity"
              type="string"
              control={control}
              label="Stock quantity"
            />
          </div>
        </Box>

        <Box className="otherInformation">
          <div className="images">
            <h2 className="titleProductForm">Images</h2>
            <div className="horizontalLine"></div>
            <Box mt={2} className="mlr30">
              <ImportFileField
                name="imageUrls"
                control={control}
                onImportFileChange={handleImportFileChange}
              />
            </Box>
          </div>
          <div className="categories">
            <h2 className="titleProductForm">Categories</h2>
            <div className="horizontalLine"></div>

            <Box className="mlr30">
              <MultipleSelectedField
                listCategory={listCategory}
                onClickMultipleSelect={handleClickMultipleSelect}
              />
            </Box>
          </div>
          <div className="rating">
            <h2 className="titleProductForm">Rating</h2>
            <div className="horizontalLine"></div>
            <Box mt={2} className="mlr30">
              {Array.isArray(ratingOptions) && ratingOptions.length > 0 && (
                <SelectField
                  name="rating"
                  disableLabel={true}
                  control={control}
                  label="Rating"
                  options={ratingOptions}
                />
              )}
            </Box>
          </div>
        </Box>
      </form>
    </Box>
  );
}
