import { Box, TextField } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';
import './adminInputField.scss';

export function AdminInputField({ name, control, label, variant, ...inputProps }) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <Box className="adminInputFieldWrapper">
      <div className="labelAdminInputField">
        <label id={name}>{label}</label>
      </div>
      <TextField
        className="adminInputField"
        name={name}
        // style={style}
        value={value}
        fullWidth={true}
        onChange={onChange}
        variant={variant || 'outlined'}
        onBlur={onBlur}
        inputRef={ref}
        error={invalid}
        helperText={error ? error.message : undefined}
        inputProps={inputProps}
      />
    </Box>
  );
}
