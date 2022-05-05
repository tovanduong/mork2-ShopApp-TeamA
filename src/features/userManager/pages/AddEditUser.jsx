import { Box, Button } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import userManager from '../../../api/userManager';
import UserForm from '../components/UserForm';
import { patchUpdateUser, postCreateUser } from '../userManagerSlice';

export default function AddEditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);
  const { userId } = useParams();

  const [initialValues, setInitialValues] = useState({
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
  });

  const isEdit = Boolean(userId);

  useEffect(() => {
    if (!userId) return;

    // IIFE
    (async () => {
      try {
        const result = await userManager.getUserById(userId);
        setInitialValues(result.data);
      } catch (error) {
        console.log('failed to fetch student details: ', error);
      }
    })();
  }, [userId]);

  const handleUserFormSubmit = (formValues) => {
    console.log(formValues);
    const fetchAddEditUser = async () => {
      if (!isEdit) {
        try {
          const result = await dispatch(postCreateUser(formValues));

          unwrapResult(result);
          toast.success('Create User Success');
          navigate('/admin/user');
        } catch (error) {
          // how to get error message
          toast.error(`Create User Error`);
        }
      } else {
        try {
          const result = await dispatch(patchUpdateUser(formValues));

          unwrapResult(result);
          toast.success('Update User Success');
          navigate('/admin/user');
        } catch (error) {
          toast.error(`Update User Error`);
        }
      }
    };

    fetchAddEditUser();
  };

  return (
    <Box mt={4} mb={8}>
      <Button onClick={(e) => navigate('/admin/user/294')}>Test update user</Button>

      <UserForm
        initialValues={initialValues}
        isEdit={isEdit}
        userId={userId}
        onSubmit={handleUserFormSubmit}
      />
    </Box>
  );
}
