import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { useController } from 'react-hook-form';
import './adminInputField.scss';

export function AdminInputField({ type, name, control, label, variant, size, ...inputProps }) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className="adminInputFieldWrapper">
      <div className="labelAdminInputField">
        <label id={name}>{label}</label>
      </div>
      <TextField
        className="adminInputField"
        name={name}
        size={size}
        type={type || 'string'}
        value={value}
        fullWidth={true}
        onChange={onChange}
        variant={variant || 'outlined'}
        onBlur={onBlur}
        inputRef={ref}
        error={invalid}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        helperText={error ? error.message : undefined}
        inputProps={inputProps}
      />
    </Box>
  );
}
