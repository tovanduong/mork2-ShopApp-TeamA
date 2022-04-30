import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CloseIcon from '@mui/icons-material/Close';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Auth from '../../../features/auth/index';
import { fetchSearchProduct } from '../../../features/user/userSlice';
import SearchBarUserForm from '../search/SearchBarUserForm';
import './header.scss';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Header = () => {
  const [open, setOpen] = useState(false);
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
  const isLogin = Boolean(localStorage.getItem('access_token'));
  let screenWidth = window.screen.width;
  const dispatch = useDispatch();
  const HandleClick = (nameModal) => {
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
              <img src="./image/ShopApp.png" alt="" />
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
                <img src="./image/icon/Cart.png" alt="" />
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
                login.user?.avatar || <AccountCircleSharpIcon sx={{ width: 50, height: 50 }} />
              ) : (
                <img src="./image/icon/MaskUser.png" alt="" />
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
        <MenuItem>My Profile</MenuItem>
        <MenuItem>Order History</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
