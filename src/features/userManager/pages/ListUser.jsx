import { Box, Button, Link } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import { UserTable } from '../../admin/components/dataTable/DataTable';
import './listUser.scss';

export default function ListUser() {
  const navigate = useNavigate();

  const handleChangeDirectory = () => {
    navigate('/admin/user/add');
  };

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
