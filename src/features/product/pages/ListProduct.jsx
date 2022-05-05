import { Box, Link, Button } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React from 'react';
import SearchBarAdmin from '../../../components/common/search/SearchBarAdminForm';
import { ProductTable } from '../../admin/components/dataTable/DataTable';
import './listProduct.scss';
export default function ListProduct() {
  return (
    <Box className="listProductWrapper" mt={4} mb={8}>
      <div className="breadCrumbsWrapper" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/admin">
            Dashboard
          </Link>
          <Link underline="none" color="inherit">
            Product
          </Link>
        </Breadcrumbs>
      </div>
      <div className="titleAndButtonProduct">
        <h1>Product</h1>
        <Box mt={3}>
          <Button
            className="btnAddEditAdmin"
            type="submit"
            variant="contained"
            color="primary"
            style={{ textTransform: 'capitalize' }}
            // disabled={isSubmitting}
            // onClick={handleSubmit(handleFormSubmit)}
          >
            {/* {isSubmitting && <CircularProgress color="primary" size={16} />}

            {!isEdit ? 'Add Product' : 'Save'} */}
            new product
          </Button>
        </Box>
      </div>
      <Box className="tableProductWrapper">
        <Box mt={0} mx={4} mb={3}>
          <SearchBarAdmin />
        </Box>
        <Box>
          <ProductTable className="productTableWrapper" />
        </Box>
      </Box>
    </Box>
  );
}
