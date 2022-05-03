import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Breadcrumbs, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import * as yup from 'yup';
import {
  AdminInputField,
  MultipleSelectedField,
  SelectField,
  TextAreaField,
} from '../../../components/FormFields';
import ImportFileField from '../../../components/FormFields/ImportFileField';
import './userForm.scss';

const schema = yup.object().shape({
  // name: yup.string().required(),
  // price: yup.number().required().min(0, 'min is 0').typeError('please enter a valid number'),
});

const roleOption = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
];

export default function UserForm({ initialValues, onSubmit }) {
  const { userId } = useParams();
  const isEdit = Boolean(userId);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (formValues) => {
    onSubmit(formValues);
  };

  return (
    <Box mx={4} className="addEditUserPageWrapper">
      <div className="breadCrumbsWrapper" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/user">User</Link>
          <Typography> Create User</Typography>
        </Breadcrumbs>
      </div>

      <div className="titleAndButtonProduct">
        <h1>{!isEdit ? 'Create User' : `Update User #${userId}`}</h1>
        <Box mt={3}>
          <Button
            className="btnAddEditAdmin"
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={handleSubmit(handleFormSubmit)}
          >
            {isSubmitting && <CircularProgress color="primary" size={16} />}

            {!isEdit ? 'Add User' : 'Save'}
          </Button>
        </Box>
      </div>

      <form className="formWrapper">
        <Box className="basicInformation">
          <h3 className="titleProductForm">Basic information</h3>

          <div className="horizontalLine"></div>

          <div className="formField">
            <div style={{ marginBottom: '25px' }}>
              <AdminInputField name="name" type="string" control={control} label="Name" />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <AdminInputField name="email" type="email" control={control} label="Email" />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <AdminInputField name="password" type="password" control={control} label="Password" />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <AdminInputField
                name="retypePassword"
                type="password"
                control={control}
                label="Retype Password"
              />
            </div>

            {Array.isArray(roleOption) && roleOption.length > 0 && (
              <SelectField name="role" control={control} label="Role" options={roleOption} />
            )}
          </div>
        </Box>

        <Box className="otherInformation">
          <div className="images">
            <h2 className="titleProductForm">Avatar</h2>
            <div className="horizontalLine"></div>
            <Box mt={2} className="mlr30">
              <ImportFileField />
            </Box>
          </div>
          <div className="otherInfo">
            <h2 className="titleProductForm">Other info</h2>
            <div className="horizontalLine"></div>

            <Box className="mlr30">
              <h3>other info standing here</h3>
            </Box>
          </div>
        </Box>
      </form>
    </Box>
  );
}
