import { Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LabelInputField } from '../../../../../components/FormFields';

const EditAccountForm = ({ onSubmit, initialValue }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });
  const handleSubmitFormEdit = (Formvalue) => {
    onSubmit(Formvalue);
  };
  const style = {
    marginBottom: '20px',
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitFormEdit)} className="myAccount-Form-Edit">
        <LabelInputField
          name="email"
          control={control}
          variant="standard"
          autoComplete="off"
          placeholder="Email"
          className="myAccount-Form-Input"
          style={style}
        />
        <LabelInputField
          name="contact"
          control={control}
          variant="standard"
          autoComplete="off"
          placeholder="Contact"
          style={style}
          className="myAccount-Form-Input"
        />
        <Box width="100%">
          <Button className="Login" type="submit">
            Edit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditAccountForm;
