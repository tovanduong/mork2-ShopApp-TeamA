import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export function RadioCheckBox({ userCheckBox, onRadioCheckBoxChange }) {
  const handleChange = (event) => {
    // console.log(event.target.value);
    onRadioCheckBoxChange(userCheckBox.id, JSON.parse(event.target.value));
  };

  return (
    userCheckBox && (
      <FormControl>
        <FormLabel
          id={userCheckBox.id}
          style={{
            color: '#000',
            fontFamily: 'Work Sans',
            fontSize: '18px',
          }}
        >
          {userCheckBox.title}
        </FormLabel>
        <RadioGroup
          row
          onChange={handleChange}
          // defaultValue={false}
          size="small"
          aria-labelledby={userCheckBox.id}
          name="row-radio-buttons-group"
        >
          {userCheckBox.data.map((select) => (
            <FormControlLabel
              key={select.value}
              value={select.value}
              control={<Radio />}
              label={select.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )
  );
}
