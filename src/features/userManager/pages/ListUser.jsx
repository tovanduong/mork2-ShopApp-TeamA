import { Box, Link, Button } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React from 'react';
import { UserTable } from '../../admin/components/dataTable/DataTable';
import './listUser.scss';
import UserDetailById from './UserDetail';

export default function ListUser() {
  return (
    <Box className="listUserWrapper" mx={4} mt={4} mb={8}>
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
      <div className="titleAndButtonUser">
        <h1>User</h1>
        <Box mt={3}>
          <Button
            className="btnAddEditAdmin"
            type="submit"
            variant="contained"
            color="primary"
            // disabled={isSubmitting}
            // onClick={handleSubmit(handleFormSubmit)}
          >
            {/* {isSubmitting && <CircularProgress color="primary" size={16} />}

            {!isEdit ? 'Add Product' : 'Save'} */}
            New user
          </Button>
        </Box>
      </div>
      <Box>
        <UserTable />
      </Box>
    </Box>
  );
}
