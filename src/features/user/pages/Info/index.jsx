import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  List,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { fetchLogOut } from '../../../auth/authSlice';
import './myAccount.scss';
import MyProfile from './myProfile/MyProfile';
import OrderHistory from './orderHistory/OrderHistory';

export default function Info() {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = React.useState(location.pathname);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const { deviceId } = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    const getRefreshToken = JSON.parse(localStorage.getItem('access_token'));
    dispatch(fetchLogOut({ refreshToken: getRefreshToken?.refresh.token, deviceId: deviceId }));
    navigate('/');
  };

  return (
    <Box className="myAccount section-box">
      <Container>
        <Box className="breadCrum">
          <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link className="breadCrum-content" to="/">
                Home
              </Link>
              <Typography color="text.primary" className="breadCrum-content">
                My Account
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
        <Grid
          container
          columnGap={{ md: '35px' }}
          columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
          className="myAccount-container"
        >
          <Grid item md={4}>
            <List
              component="nav"
              aria-label="main mailbox folders"
              className="myAccount-navigation"
            >
              <Typography variant="h4" className="myAccount-navigation-title">
                Navigation
              </Typography>
              <ListItemButton
                className="myAccount-navigation-item"
                selected={selectedIndex === '/myAccount'}
                onClick={(event) => handleListItemClick(event, '/myAccount')}
              >
                <Link
                  className="myAccount-link"
                  to="/myAccount"
                  style={{ textDecoration: 'none', color: '#000', width: '100%' }}
                >
                  My Profile
                </Link>
              </ListItemButton>
              <ListItemButton
                className="myAccount-navigation-item"
                selected={selectedIndex === '/myAccount/orderHistory/'}
                onClick={(event) => handleListItemClick(event, '/myAccount/orderHistory/')}
              >
                <Link
                  className="myAccount-link"
                  to="/myAccount/orderHistory/"
                  style={{ textDecoration: 'none', color: '#000', width: '100%' }}
                >
                  Order History
                </Link>
              </ListItemButton>
              <ListItemButton className="myAccount-navigation-item" onClick={handleLogOut}>
                Log Out
              </ListItemButton>
            </List>
          </Grid>

          <Grid item md={8} className="myAccount-routes" mr="-35px">
            <Routes>
              <Route index element={<MyProfile />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
