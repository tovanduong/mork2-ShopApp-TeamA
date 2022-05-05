import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import React from 'react';
import { useController } from 'react-hook-form';
import './radioGroupField.scss';
import { Box } from '@mui/material';

export function RadioInputField({ name, control, options }) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  console.log(options);
  return (
    <FormControl component="fieldset">
      <RadioGroup
        defaultValue="Cash on delivery"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((options) => (
          <FormControlLabel
            key={options.value}
            className="Checkout-radio"
            value={options.value}
            control={<Radio />}
            label={options.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
