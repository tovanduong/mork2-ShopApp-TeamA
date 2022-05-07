import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {
  alpha,
  AppBar,
  Badge,
  Box,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../../../../assets/images/menu.svg';
import { listAdminNavbar } from '../../../../constants/admin';
import { fetchLogOut } from '../../../auth/authSlice';
import PopupLogoutConfirm from '../popupConfirm/PopupLogoutConfirm';
import './navigationAdmin.scss';

const drawerWidth = 224;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.light, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.7),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavigationAdmin(props) {
  const { window } = props;
  const idAdminNavbar = localStorage.getItem('idAdminNavbar');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(idAdminNavbar || 1);
  const navigate = useNavigate();
  const [adminNavbar, setAdminNavbar] = useState(listAdminNavbar);
  const dispatch = useDispatch();

  const userInfor = JSON.parse(localStorage.getItem('user'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openPopupLogout, setOpenPopupLogout] = useState(false);

  const handleClickOpenPopupLogout = () => {
    setOpenPopupLogout(true);
  };

  const handleClosePopupLogout = () => {
    setOpenPopupLogout(false);
  };

  const handleConfirmLogout = () => {
    navigate('/');
    const deviceId = localStorage.getItem('deviceId');
    const getRefreshToken = JSON.parse(localStorage.getItem('access_token'));
    dispatch(fetchLogOut({ refreshToken: getRefreshToken?.refresh.token, deviceId: deviceId }));
  };

  const handleClickItem = (item, subItem) => {
    if (!subItem) {
      if (item.title === 'Logout') {
        setOpenPopupLogout(true);
      } else {
        setSelectedIndex(item.id);
        navigate(item.link);
        localStorage.setItem('idAdminNavbar', item.id);
      }
    } else {
      // let temp = !item.isOpen
      // console.log(!item.isOpen);
      console.log(adminNavbar);
      // setAdminNavbar({...adminNavbar, item});
    }
  };
  const drawer = (
    <div style={{ minHeight: '100vh', backgroundColor: '#3d464d' }}>
      <Toolbar className="welcomeAdminWrapper">
        <Typography variant="h5" className="nameApp">
          SHOP APP
        </Typography>
        <p className="barge">
          <span>ADMIN</span>
        </p>
      </Toolbar>
      <Divider />
      <Box className="listMenuWrapper">
        <List>
          <List
            sx={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                style={{ backgroundColor: '#3d464d', color: '#C4C4C4' }}
                component="div"
                id="nested-list-subheader"
              >
                APPLICATION
              </ListSubheader>
            }
          >
            {adminNavbar &&
              selectedIndex &&
              adminNavbar.map((item) => (
                <div key={item.title}>
                  <ListItemButton
                    onClick={(e) => handleClickItem(item, item.subItem)}
                    selected={!item.subItem && selectedIndex === item.id}
                  >
                    <img style={{ paddingRight: '10px' }} src={item.icon} alt={item.name} />
                    <ListItemText primary={item.title} />
                    {item.subItem && (
                      <>{item.isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}</>
                    )}
                  </ListItemButton>

                  {item.subItem && (
                    <Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                      {item.subItem.map((subItem) => (
                        <List key={subItem.title} component="div" disablePadding>
                          <ListItemButton
                            sx={{ pl: 6 }}
                            onClick={(e) => handleClickItem(subItem, subItem.subItem)}
                            selected={selectedIndex === subItem.id}
                          >
                            <ListItemText primary={subItem.title} />
                          </ListItemButton>
                        </List>
                      ))}
                    </Collapse>
                  )}
                </div>
              ))}
          </List>
        </List>
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <PopupLogoutConfirm
        openPopupLogout={openPopupLogout}
        handleClickOpenPopupLogout={handleClickOpenPopupLogout}
        handleClosePopupLogout={handleClosePopupLogout}
        onConfirmLogout={handleConfirmLogout}
      />
      <AppBar
        style={{ boxShadow: 'none' }}
        color="common"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon fontSize="large" /> */}
            <img src={menuIcon} alt="menu" />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show new notifications" color="inherit">
              <Badge badgeContent={3} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box className="leftAppBarAdminInfo">
              <img
                className="avatarAdmin"
                width="40"
                height="40"
                src={
                  userInfor
                    ? userInfor.avatar
                    : 'https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png'
                }
                // alt="avatar_admin"
              />
              <span className="adminInfo">
                <div className="nameAdmin">{userInfor ? userInfor.username : 'Admin User'}</div>
                <span className="roleInfo"> {userInfor ? userInfor.role : 'admin'}</span>
              </span>
            </Box>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </Box>
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className="sideBarWrapper"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      ></Box>
    </Box>
  );
}
