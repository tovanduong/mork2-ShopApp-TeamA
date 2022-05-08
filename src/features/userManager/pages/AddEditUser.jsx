import { Box, Button } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserForm from '../components/UserForm';
import { patchUpdateUser, postCreateUser } from '../userManagerSlice';

export default function AddEditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  const [dataUpdate, setDataUpdate] = useState(null);

  const isEdit = Boolean(userId);

  const handleUserFormSubmit = (formValues) => {
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
        console.log(formValues);
        for (const [key, value] of Object.entries(formValues)) {
          if (value) {
            // let itemData = key : ${value}`;
            let dataKey = key;
            let dataValue = value;
            console.log(dataKey);
            console.log(dataValue);

            setDataUpdate({ ...dataUpdate, name: 'test name' });
            console.log(dataUpdate);
          }
        }
        console.log(dataUpdate);

        // try {
        //   const result = await dispatch(patchUpdateUser(userId, formValues));
        //   unwrapResult(result);
        //   toast.success('Update User Success');
        //   navigate('/admin/user');
        // } catch (error) {
        //   toast.error(`Update User Error`);
        // }
      }
    };

    fetchAddEditUser();
  };

  return (
    <Box mt={4} mb={8}>
      <UserForm
        // initialValues={initialValues}
        isEdit={isEdit}
        userId={userId}
        onSubmit={handleUserFormSubmit}
      />
    </Box>
  );
}
