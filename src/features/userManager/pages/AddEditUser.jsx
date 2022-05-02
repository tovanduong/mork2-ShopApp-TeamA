import { Box } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserForm from '../components/UserForm';
import { postCreateUser } from '../userManagerSlice';

export default function AddEditUser() {
  const dispatch = useDispatch();
  const naviage = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    retypePassword: '',
    role: '',
    avatar: '',
    contact: '',
    isActive: false,
    isEmailVerified: false,
    isContactVerified: false,
  };

  const handleUserFormSubmit = (formValues) => {
    console.log(formValues);
    // const fetchCreateUser = async () => {
    //   try {
    //     const result = await dispatch(postCreateUser(formValues));

    //     unwrapResult(result);
    //     toast.success('Create User Success');
    //     naviage('/admin/user');
    //   } catch (error) {
    //     // how to get error message
    //     toast.error(`Create User Error`);
    //   }
    // };

    // fetchCreateUser();
  };

  return (
    <Box mt={4} mb={8}>
      <UserForm initialValues={initialValues} onSubmit={handleUserFormSubmit} />
    </Box>
  );
}
