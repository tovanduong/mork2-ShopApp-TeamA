/** @format */

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import editButton from '../../../../assets/images/edit_button.svg';
import deleteButton from '../../../../assets/images/delete_button.svg';

export function Delete(props) {
  const { id, subject, handleDelete } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="popupConfirm-wrapper">
      <IconButton className="delete-button" onClick={handleClickOpen}>
        <img src={deleteButton} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          boxShadow: ' 5px 5px 15px 2px rgba(0, 0, 0, 0.5)',
          borderRadius: '5px',
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            '&.MuiTypography-root': {
              borderBottom: '1px solid #929395',
            },
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 700,

            /* identical to box height */

            color: ' #000000',
          }}
        >
          {'Confirm Delete'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,

              /* identical to box height */

              color: ' #000000',
            }}
          >
            Are you sure to delete {subject} #{id} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            '&.MuiDialogActions-root': {
              borderTop: '1px solid #929395',
            },
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              background: '#C4C4C4',
              borderRadius: '5px',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,

              color: '#000000',
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            sx={{
              background: '#F02020',
              borderRadius: '5px',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,

              color: '#FFFFFF',
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function Edit(props) {
  const { id, subject } = props;
  //subject = user or product
  const navigate = useNavigate();
  const onClickEdit = (e) => {
    e.preventDefault();
    navigate(`/admin/${subject}/${id}`);
  };

  return (
    <div>
      <IconButton className="edit-button" onClick={onClickEdit}>
        <img src={editButton} />
      </IconButton>
    </div>
  );
}
