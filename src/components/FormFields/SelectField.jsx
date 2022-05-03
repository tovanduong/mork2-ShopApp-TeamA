import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useController } from 'react-hook-form';
import './selectField.scss';

export function SelectField({ name, control, label, disabled, options, disableLabel }) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <Box className="selectFieldWrapper">
      <FormControl
        fullWidth={true}
        size="small"
        variant="outlined"
        disabled={disabled}
        margin="normal"
        component="fieldset"
        error={invalid}
      >
        {!disableLabel && (
          <div className="labelSelectField">
            <label id={`${name}_label`}>{label}</label>
          </div>
        )}
        {/* <InputLabel id={`${name}_l  abel`}>{label}</InputLabel> */}
        <Select
          className="selectField"
          labelId={`${name}_label`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error ? error.message : undefined}</FormHelperText>
      </FormControl>
    </Box>
  );
}
