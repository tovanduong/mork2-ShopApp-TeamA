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

export function Delete(props) {
  const { productId, subject } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(productId);
    setOpen(false);
  };
  return (
    <div className="popupConfirm-wrapper">
      <IconButton className="delete-button" onClick={handleClickOpen}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H5H21"
            stroke="#F02020"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
            stroke="#F02020"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11V17"
            stroke="#F02020"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 11V17"
            stroke="#F02020"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
            fontSize: '25px',
            lineHeight: '29px',
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
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: ' #000000',
            }}
          >
            Are you sure to delete {subject} #{productId} ?
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
              fontSize: '20px',
              lineHeight: '23px',
              color: '#000000',
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              background: '#F02020',
              borderRadius: '5px',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
            stroke="#387B18"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
            stroke="#387B18"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>
    </div>
  );
}
