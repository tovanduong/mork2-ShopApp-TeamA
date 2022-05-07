import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useState } from 'react';
import uploadFile from '../../assets/images/uploadFile.svg';
import { AdminInputField } from './AdminInputField';
import './importFileField.scss';

export const ImportFileField = ({ onImportFileChange, control, name }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nameImage, setNameImage] = useState('');

  const Input = styled('input')({
    display: 'none',
  });

  const handleImportImageChange = (event) => {
    if (Boolean(event.target.accept)) {
      setNameImage(event.target.files[0].name);
      setSelectedImage(event.target.files[0]);
      onImportFileChange(event.target.files[0]);
    } else {
      setNameImage(event.target.value);
      setSelectedImage(null);
      onImportFileChange(nameImage);
    }
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
            src={nameImage || uploadFile}
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

          <AdminInputField
            className="nameImageField"
            size="small"
            name={name}
            onChange={(e) => handleImportImageChange(e)}
            type="string"
            value={nameImage}
            control={control}
          />
        </div>
      </label>
    </div>
  );
};
