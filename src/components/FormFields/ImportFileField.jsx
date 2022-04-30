import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './importFileField.scss';
import uploadFile from '../../assets/images/uploadFile.svg';

const ImportFileField = ({ onImportFileChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nameImage, setNameImage] = useState('');

  const Input = styled('input')({
    display: 'none',
  });

  const handleImportImageChange = (event) => {
    setNameImage(event.target.files[0].name);
    setSelectedImage(event.target.files[0]);
    onImportFileChange(event.target.files[0]);
  };

  return (
    <div className="importFileFieldWrapper">
      <div className="imageWrapper">
        {selectedImage ? (
          <img
            alt="not_found"
            className="imageImportFile"
            src={URL.createObjectURL(selectedImage)}
          />
        ) : (
          <img
            alt="upload_file"
            width="100"
            height="100"
            className="imageImportFile"
            src={uploadFile}
          />
        )}
      </div>

      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          name="myImage"
          onChange={(e) => handleImportImageChange(e)}
        />
        <div className="btnTextFieldWrapper">
          <Button variant="contained" component="span" size="small">
            Chọn tệp
          </Button>
          <TextField
            size="small"
            className="nameImageField"
            id="standard-basic"
            value={nameImage}
            variant="outlined"
          />
        </div>
      </label>
    </div>
  );
};

export default ImportFileField;
