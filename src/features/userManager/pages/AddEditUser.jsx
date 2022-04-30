import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserForm from '../components/UserForm';

export default function AddEditUser() {
  const dispatch = useDispatch();

  const [listCategory, setListCategory] = useState();

  // // get all categories
  // useEffect(() => {
  //   const fetchListCategory = async () => {
  //     try {
  //       const listCategory = await dispatch(getListCategory());

  //       unwrapResult(listCategory);
  //       console.log(listCategory);

  //       // setListCategory(listUser.payload.results);
  //     } catch (error) {
  //       console.log('failed to fetch product list: ', error);
  //     }
  //   };

  //   fetchListCategory();
  // }, [dispatch]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    retypePassword: '',
    role: '',
    avatar: '',
    contact: '',
    status: '',
    verifyEmail: '',
    verifyContact: '',
  };

  const handleUserFormSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <Box mt={4} mb={8}>
      <UserForm initialValues={initialValues} onSubmit={handleUserFormSubmit} />
    </Box>
  );
}
