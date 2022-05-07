import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostVerify } from '../../../userSlice';
import VerifyForm from './VerifyForm';

const VerifyEmail = ({ onClose }) => {
  const dispatch = useDispatch();
  const { deviceId } = useSelector((state) => state.auth.login);
  const initialValue = {
    token: '',
  };
  const handleForgotSubmit = (token) => {
    console.log(token, deviceId);
    dispatch(fetchPostVerify({ ...token, deviceId }));
    onClose(true);
  };

  return (
    <Box className="Modal-Forgot">
      <Box ml="47px" mr="auto">
        <Typography variant="h4" mb="7px">
          Verify Email
        </Typography>
        <Typography variant="subtitle1" fontSize="12px" mb="31px">
          Please enter your token to verify email
        </Typography>
      </Box>

      <VerifyForm initialValue={initialValue} onSubmit={handleForgotSubmit} />
    </Box>
  );
};

export default VerifyEmail;
