import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Breadcrumbs, Button, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import * as yup from 'yup';
import userManager from '../../../api/userManager';
import {
  AdminInputField,
  ImportFileField,
  RadioCheckBox,
  SelectField,
} from '../../../components/FormFields';
import { listUserCheckBox, roleOption } from '../../../constants/admin';
import './userForm.scss';

const schema = yup.object().shape({
  name: yup.string().required('name is required'),
  email: yup.string().email().required(),
  password: yup.string().required(),
  retypePassword: yup
    .string()
    .required('retype password is requied')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  role: yup.string().required(),
  contact: yup.string(),
});

export default function UserForm({ initialValues, isEdit, userId, onSubmit }) {
  const [avatar, setAvatar] = useState(null);
  const [checkBoxValues, setCheckBoxValues] = useState({
    isActive: false,
    isEmailVerified: false,
    isContactVerified: false,
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleImportFileChange = (data) => {
    console.log(data);
    setAvatar(data);
  };

  const handleRadioCheckBoxChange = (checkBoxId, valueChanged) => {
    setCheckBoxValues({ ...checkBoxValues, [checkBoxId]: valueChanged });
  };

  // submit add update user
  const handleFormSubmit = async (formValues) => {
    console.log('submited: ', formValues);

    if (typeof avatar === 'object') {
      const formData = new FormData();
      await formData.append('image', avatar, avatar.name);

      // upload image to get url link
      async function fetchUploadImage() {
        try {
          const result = await userManager.postUploadImage(formData);
          return await result.data.imageURL;
        } catch (error) {
          console.log('failed to upload image: ', error.message);
        }
      }

      const imageUrl = await fetchUploadImage();

      const dataSubmit = {
        username: formValues.name,
        email: formValues.email,
        password: formValues.password,
        avatar: imageUrl || 'null',
        role: formValues.role,
        ...checkBoxValues,
      };
      onSubmit(dataSubmit);
    }

    if (typeof avatar === 'string') {
      console.log(avatar);
      const dataSubmit = {
        username: formValues.name,
        email: formValues.email,
        password: formValues.password,
        avatar: avatar || 'null',
        role: formValues.role,
        ...checkBoxValues,
      };

      onSubmit(dataSubmit);
    }
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
              <AdminInputField name="username" type="string" control={control} label="Name" />
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
              <ImportFileField
                name="avatar"
                control={control}
                onImportFileChange={handleImportFileChange}
              />
            </Box>
          </div>
          <div className="otherInfo">
            <h2 className="titleProductForm">Other info</h2>
            <div className="horizontalLine"></div>

            <Box className="mlr30">
              <Box mt={4}>
                <AdminInputField name="contact" type="string" control={control} label="Contact" />
              </Box>

              {listUserCheckBox.map((userCheckBox) => (
                <RadioCheckBox
                  key={userCheckBox.id}
                  userCheckBox={userCheckBox}
                  onRadioCheckBoxChange={handleRadioCheckBoxChange}
                />
              ))}
            </Box>
          </div>
        </Box>
      </form>
    </Box>
  );
}
