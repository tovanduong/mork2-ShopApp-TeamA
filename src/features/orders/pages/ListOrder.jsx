import React from 'react';
import { Box, Link, Button } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { OrderTable } from '../../admin/components/dataTable/DataTable';
export default function ListOrder() {
  return (
    <Box className="listOrderWrapper">
      <div className="breadCrumbsWrapper" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/admin">
            Dashboard
          </Link>
          <Link underline="none" color="inherit">
            Order
          </Link>
        </Breadcrumbs>
      </div>
      <div className="titleOrder">
        <h1>Order</h1>
      </div>
      <Box>
        <OrderTable />
      </Box>
    </Box>
  );
}
