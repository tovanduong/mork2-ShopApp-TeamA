import CloseIcon from '@mui/icons-material/Close';
import { Box, Link, Modal, Typography } from '@mui/material';
import DeviceDetector from 'device-detector-js';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLogin, fetchSendVerifyEmail } from '../authSlice';
import LoginForm from '../component/LoginForm';
import Forgot from './Forgot';

const Login = ({ parentCallback, onClose }) => {
  const [device, setDevice] = useState('');
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.login);
  const sendData = () => {
    parentCallback('Actived');
  };
  const childClose = (childData) => {
    setOpen(childData);
  };

  const initialValue = {
    email: '',
    password: '',
  };

  useEffect(() => {
    const deviceDetector = new DeviceDetector();
    var userAgent = navigator.userAgent;
    const deviceAccess = deviceDetector.parse(userAgent);
    setDevice(deviceAccess.device.type);
  }, [user]);

  useEffect(() => {
    // localStorage.setItem('datauser', JSON.stringify(user))
    if (user && Object.values(user).length !== 0) {
      if (user.role === 'user') {
        navigate('/');
      }
      if (user.role === 'admin') {
        navigate('/admin');
      }
    }
  }, [user]);

  const handleLoginSubmit = (value) => {
    const { email } = value;
    const deviceId = `${device}-${email}`;
    dispatch(fetchLogin({ ...value, deviceId: deviceId }));
    localStorage.setItem('deviceId', deviceId);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <Box className="Modal-Container">
      <Typography variant="h6" mb="44px">
        Welcome to Shop App
      </Typography>
      <LoginForm
        initialValue={initialValue}
        onSubmit={handleLoginSubmit}
        onClick={handleOpen}
        onClose={onClose}
      />

      <Box className="Box__linkto">
        <Link className="linkto" onClick={() => sendData()}>
          Create An Account
        </Link>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box-auth">
          <CloseIcon className="close-modal" onClick={handleClose} />
          <Forgot propsClose={childClose} />
          <Box className="auth-layout">
            <img src="./image/icon/VectorBag.png" alt="VectorBag" />
            <img src="./image/icon/ShopApp.png" alt="ShopApp" />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Login;
