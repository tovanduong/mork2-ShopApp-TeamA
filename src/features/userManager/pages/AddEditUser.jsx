import { Box } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import userManager from '../../../api/userManager';
import UserForm from '../components/UserForm';
import { postCreateUser } from '../userManagerSlice';

export default function AddEditUser() {
  const dispatch = useDispatch();
  const naviage = useNavigate();
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  const isEdit = Boolean(userId);

  useEffect(() => {
    if (!userId) return;

    // IIFE
    (async () => {
      try {
        const result = await userManager.getUserById(userId);
        setUser(result.data);
      } catch (error) {
        console.log('failed to fetch student details: ', error);
      }
    })();
  }, [userId]);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    retypePassword: '',
    role: '',
    avatar: '',
    contact: '',
    isActive: false,
    isEmailVerified: false,
    isContactVerified: false,
    ...user,
  };

  const handleUserFormSubmit = (formValues) => {
    // console.log(formValues);
    const fetchCreateUser = async () => {
      if (!isEdit) {
        try {
          const result = await dispatch(postCreateUser(formValues));

          unwrapResult(result);
          toast.success('Create User Success');
          naviage('/admin/user');
        } catch (error) {
          // how to get error message
          toast.error(`Create User Error`);
        }
      } else {
        console.log('update user');
      }
    };

    fetchCreateUser();
  };

  return (
    <Box mt={4} mb={8}>
      <UserForm
        initialValues={initialValues}
        isEdit={isEdit}
        userId={userId}
        onSubmit={handleUserFormSubmit}
      />
    </Box>
  );
}
