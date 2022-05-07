import { Box, Link, Button } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBarAdmin from '../../../components/common/search/SearchBarAdminForm';
import { ProductTable } from '../../admin/components/dataTable/DataTable';
import './listProduct.scss';
export default function ListProduct() {
  const navigate = useNavigate();

  const handleChangeDirectory = () => {
    navigate('/admin/product/add');
  };

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
            style={{
              textTransform: 'capitalize',
              fontFamily: 'Work Sans',
              fonStyle: 'normal',
              fontWeight: 600,
              fontSize: '20px',
              lineheight: '23px',
              letterSpacing: '-0.02em',
              color: '#000000',
            }}
            // href="/admin/user/add"
            // disabled={isSubmitting}
            onClick={handleChangeDirectory}
          >
            {/* {isSubmitting && <CircularProgress color="primary" size={16} />}

            {!isEdit ? 'Add Product' : 'Save'} */}
            New product
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
