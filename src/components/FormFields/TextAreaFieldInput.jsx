import { Box, TextareaAutosize, TextField } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';
import './textAreaField.scss';

export function TextAreaFieldInput({
  name,
  style,
  control,
  label,
  disabled,
  variant,
  placeholder,
  ...inputProps
}) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    disabled,
  });

  return (
    <Box className="textAreaFieldWrapper">
      <div className="labelTextAreaField">
        <label id={name}>{label}</label>
      </div>
      <TextareaAutosize
        className="textAreaInputField"
        placeholder={placeholder}
        minRows={3}
        name={name}
        style={style}
        value={value}
        onChange={onChange}
        variant={variant || 'outlined'}
        onBlur={onBlur}
        disabled={disabled}
      />
    </Box>
  );
}
