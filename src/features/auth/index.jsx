import { Box } from '@mui/material';
import React, { useState } from 'react';
import Login from './Sign In/Login';
import SignUp from './Sign up/SignUp';
import './auth.scss';

const Auth = () => {
  let [user, setUser] = useState('');
  const handleGetAuth = (data) => {
    setUser(data);
  };

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      width="100% !important"
      className="parent"
      position="relative"
    >
      <Box width="100%">
        <Login parentCallback={handleGetAuth} />
      </Box>
      <Box width="100%">
        <SignUp parentCallback={handleGetAuth} />
      </Box>
      <Box className={`layout ${user}`}>
        <img src="./image/icon/VectorBag.png" alt="VectorBag" />
        <img src="./image/icon/ShopApp.png" alt="ShopApp" />
      </Box>
    </Box>
  );
};

export default Auth;
