import { Box, Link } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React from 'react';
import { UserTable } from '../../admin/components/dataTable/DataTable';

export default function ListUser() {
  return (
    <Box mt={4} mb={8}>
      <div className="breadCrumbsWrapper" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/admin">
            Dashboard
          </Link>
          <Link underline="none" color="inherit">
            User
          </Link>
        </Breadcrumbs>
      </div>
      <Box>
        <UserTable />
      </Box>
    </Box>
  );
}
