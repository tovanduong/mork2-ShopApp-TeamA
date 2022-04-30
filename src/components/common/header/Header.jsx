import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../features/auth/index';
import SearchBar from '../SearchBar';
import './header.scss';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [menu, setMenu] = useState(false);
    const HandleClick = () => {
        setMenu(!menu);
    }
    const HandleClose = () => {
        setMenu(false);

    }
    var addclass = menu ? 'show-menu' : ' ';
    return (
        <Box>
            <Box className='Header'>
                <Box className='Header__topbar'>
                    <Box component='ul' className='Header__topbar--list'>
                        <Typography component='li' className='Header__topbar--item'><Link className='Header__topbar--link' to='/'>About</Link></Typography>
                        <Typography component='li' className='Header__topbar--item'><Link className='Header__topbar--link' to='/'>Contacts</Link></Typography>
                        <Typography component='li' className='Header__topbar--item'><Link className='Header__topbar--link' to='/'>Store</Link></Typography>
                        <Typography component='li' className='Header__topbar--item'><Link className='Header__topbar--link' to='/'>Track Orders</Link></Typography>
                    </Box>
                </Box>
                <Box className='Header__mainbar'>
                    <Box component='ul' className='Header__mainbar--list'>
                        <Box className='Header__mainbar--item'><img src='./image/ShopApp.png' alt='' /></Box>
                        <Box className='Header__mainbar--item header__mainbar--search'>
                            <Box className='Header__mainbar--item header__mainbar--search'>
                                <FormatListBulletedIcon />
                                <Button className='mainbar__search--Btn-categories'>Categories</Button>
                            </Box>
                            <span className='split' />
                            <SearchBar />
                        </Box>
                        <Box className='Header__mainbar--item'><img src='./image/icon/Cart.png' alt='' /></Box>
                        <Box className='Header__mainbar--item'><img src='./image/icon/MaskUser.png' alt='' onClick={handleOpen} /></Box>
                        <Box className='Header__menu' onClick={HandleClick}><MenuIcon /></Box>
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
                        <Auth />
                    </Box>
                </Modal>
            </Box>
            <Box className={`menuMobile ${addclass}`}>
                {/* <Box className='Header__mainbar--item'>Menu</Box> */}
                <Box className='Header__mainbar--item'>Cart</Box>
                <Box className='Header__mainbar--item' onClick={handleOpen}>Login</Box>
            </Box>
        </Box>
    )
}

export default Header