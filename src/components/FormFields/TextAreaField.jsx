import { Box, TextField } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';
import './textAreaField.scss';

export function TextAreaField({ name, style, control, label, variant, ...inputProps }) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <Box className="textAreaFieldWrapper">
      <div className="labelTextAreaField">
        <label id={name}>{label}</label>
      </div>
      <TextField
        className="textAreaInputField"
        name={name}
        style={style}
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
