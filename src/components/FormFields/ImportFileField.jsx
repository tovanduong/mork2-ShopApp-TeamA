import styled from '@emotion/styled';
import { Button, Input, TextField } from '@mui/material';
import React from 'react';
import './importFileField.scss';

export default function ImportFileField() {
  const Input = styled('input')({
    display: 'none',
  });

  return (
    <>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <button className="buttonChooseFile" variant="contained" component="span">
          Chọn tệp
        </button>

        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </label>
    </>
  );
}
