import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { useState } from 'react';

export default function PopupLogoutConfirm({
  openPopupLogout,
  handleClickOpenPopupLogout,
  handleClosePopupLogout,
  onConfirmLogout,
}) {
  const handleConfirmLogout = () => {
    onConfirmLogout();
    handleClosePopupLogout();
  };

  return (
    <div className="popupConfirm-wrapper">
      <IconButton className="delete-button" onClick={handleClickOpenPopupLogout}>
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
            stroke="#F02020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11V17"
            stroke="#F02020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 11V17"
            stroke="#F02020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>
      <Dialog
        open={openPopupLogout}
        onClose={handleClosePopupLogout}
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
            color: ' #000000',
          }}
        >
          Confirm Logout
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              fontFamily: 'Arial',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '20px',
              marginTop: '18px',
              color: ' #000000',
            }}
          >
            Are you sure to logout?
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
            onClick={handleClosePopupLogout}
            sx={{
              background: '#C4C4C4',
              borderRadius: '5px',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              color: '#000000',
              textTransform: 'capitalize',
              marginRight: '10px',
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => handleConfirmLogout()}
            sx={{
              background: '#F02020',
              borderRadius: '5px',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              color: '#FFFFFF',
              textTransform: 'capitalize',
            }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
