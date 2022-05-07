import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CloseIcon from '@mui/icons-material/Close';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../../features/auth/index';
import { fetchSearchProduct } from '../../../features/user/userSlice';
import SearchBarUserForm from '../search/SearchBarUserForm';
import './header.scss';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { fetchLogOut } from '../../../features/auth/authSlice';
import ShopApp from '../../../assets/images/ShopApp.png';
import Cart from '../../../assets/images/icon/Cart.png';
import UserIcon from '../../../assets/images/icon/MaskUser.png';
const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleHoverMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [menu, setMenu] = useState(false);
  const { login } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem('user'));
  const isLogin = Boolean(localStorage.getItem('access_token'));
  let screenWidth = window.screen.width;
  const dispatch = useDispatch();
  const HandleClick = () => {
    setMenu(!menu);
  };

  const handlePopup = () => {
    //code Popup here
  };

  var addclass = menu ? 'show-menu' : ' ';

  const handleSubmit = (value) => {
    console.log(value);
    const { search } = value;
    dispatch(fetchSearchProduct(search));
  };
  const { deviceId } = useSelector((state) => state.auth.login);
  const handleLogOut = () => {
    const getRefreshToken = JSON.parse(localStorage.getItem('access_token'));
    dispatch(fetchLogOut({ refreshToken: getRefreshToken?.refresh.token, deviceId: deviceId }));
    handleCloseMenu();
    navigate('/');
  };

  return (
    <Box>
      <Box className="Header">
        <Box className="Header__topbar">
          <Box component="ul" className="Header__topbar--list">
            <Typography component="li" className="Header__topbar--item">
              <Link className="Header__topbar--link" to="/">
                About
              </Link>
            </Typography>
            <Typography component="li" className="Header__topbar--item">
              <Link className="Header__topbar--link" to="/">
                Contacts
              </Link>
            </Typography>
            <Typography component="li" className="Header__topbar--item">
              <Link className="Header__topbar--link" to="/">
                Store
              </Link>
            </Typography>
            <Typography component="li" className="Header__topbar--item">
              <Link className="Header__topbar--link" to="/">
                Track Orders
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box className="Header__mainbar">
          <Box component="ul" className="Header__mainbar--list">
            <Box className="Header__mainbar--item">
              <img src={ShopApp} alt="" />
            </Box>
            <Box className="Header__mainbar--item header__mainbar--search">
              <Box className="Header__mainbar--item header__mainbar--search">
                <FormatListBulletedIcon />
                <Button className="mainbar__search--Btn-categories">Categories</Button>
              </Box>
              <span className="split" />
              <SearchBarUserForm onSubmit={handleSubmit} />
            </Box>
            <Box className="Header__mainbar--item" onClick={!isLogin ? handleOpen : handlePopup}>
              <Link to={isLogin ? '/cart' : '/'}>
                <img src={Cart} alt="Cart" />
              </Link>
            </Box>
            <Box
              className="Header__mainbar--item"
              onClick={!isLogin ? handleOpen : handlePopup}
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onMouseOver={isLogin ? handleHoverMenu : null}
            >
              {isLogin ? (
                (
                  <img
                    src={user.avatar}
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    alt="avatar"
                  />
                ) || (
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2021/03/02/103650164-731814290963011-1374-5806-7233-1614677857.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=9yXpYDxZfyUhN1j1WGnnNg"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    alt="avatar"
                  />
                )
              ) : (
                <img src={UserIcon} alt="user" />
              )}
            </Box>
            <Box className="Header__menu" onClick={HandleClick}>
              <MenuIcon />
            </Box>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box">
            <CloseIcon className="close-modal" onClick={handleClose} />
            <Auth onClose={handleClose} />
          </Box>
        </Modal>
      </Box>
      <Box className={`menuMobile ${addclass}`}>
        <Box className="Header__mainbar--item">Cart</Box>
        <Box
          className="Header__mainbar--item"
          onClick={screenWidth > 1200 ? handleOpen : handlePopup}
        >
          Login
        </Box>
      </Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        TransitionComponent={Fade}
      >
        <MenuItem>
          <Link
            to="/myAccount"
            style={{ textDecoration: 'none', color: '#000' }}
            onClick={handleCloseMenu}
          >
            My Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/myAccount/orderHistory/"
            style={{ textDecoration: 'none', color: '#000' }}
            onClick={handleCloseMenu}
          >
            Order History
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
