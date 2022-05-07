import { Box, Button, Fade, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../../../api/userAPI';
import ItemOrder from '../../../../../components/common/itemOrder/ItemOrder';
import './myProfile.scss';
import Backdrop from '@mui/material/Backdrop';
import EditAccountForm from './EditAccountForm';
import { fetchEditContact, fetchEditEmail } from '../../../userSlice';

const MyProfile = () => {
  const [recentOrder, setRecentOrder] = useState([]);
  const [open, setOpen] = React.useState(false);
  const isEdit = useSelector((state) => state.user.isEdit);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const filter = useSelector((state) => state.user.filter);
  useEffect(() => {
    getOrder(filter).then((data) => setRecentOrder(data.orders.result));
  }, []);
  const initialValue = {
    email: user?.email,
    contact: user?.contact,
  };

  const handleSubmitEditAccount = (value) => {
    const { contact, email } = value;
    if (contact && contact !== user.contact) {
      dispatch(fetchEditContact(contact));
    }
    if (email && email !== user.email) {
      dispatch(fetchEditEmail(email));
    }
    console.log(isEdit);
    if (isEdit) {
      console.log(isEdit);
      handleClose();
    }
  };
  return (
    <Box>
      <Box className="myInfo">
        <Box className="myInfo-img">
          <img
            src={
              user?.avatar
                ? user?.avatar
                : 'https://i1-vnexpress.vnecdn.net/2021/03/02/103650164-731814290963011-1374-5806-7233-1614677857.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=9yXpYDxZfyUhN1j1WGnnNg'
            }
            alt="avatar"
          />
        </Box>
        <Box>
          <Typography variant="h4" className="myInfo-name">
            {user.username}
          </Typography>
          <Typography variant="h4" className="myInfo-id">
            <strong>id</strong>: {user.id}
          </Typography>
          <Typography variant="h4" className="myInfo-email">
            <strong>Email</strong>: {user.email}
          </Typography>
          <Typography variant="h4" className="myInfo-phone">
            <strong>Phone</strong>: {user.contact}
          </Typography>

          <Button className="myInfo-btn" onClick={handleOpen}>
            Edit Profile
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" className="myInfo-order">
          Recent Orders
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          className="myInfo-orderTitle-container"
        >
          <Box gridColumn="span 2" className="myInfo-order-title">
            Order
          </Box>
          <Box gridColumn="span 4" className="myInfo-order-title">
            Date
          </Box>
          <Box gridColumn="span 4" className="myInfo-order-title">
            Status
          </Box>
          <Box gridColumn="span 2" className="myInfo-order-title">
            Total
          </Box>
        </Box>
        <Box pb="19px">
          {recentOrder &&
            recentOrder.map((item) => {
              return <ItemOrder {...item} key={item.id} />;
            })}
        </Box>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="myAccount-Edid-Modal">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit Account
            </Typography>
            <Box id="transition-modal-description" sx={{ mt: 2 }}>
              <EditAccountForm onSubmit={handleSubmitEditAccount} initialValue={initialValue} />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default MyProfile;
