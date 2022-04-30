import { Box, Container, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import VerifyEmail from './component/VerifyEmail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSendVerifyEmail } from '../../../auth/authSlice';
import { fetchGetAllProduct } from '../../userSlice';
import Carousel from './component/carousel/Carousel';
import './home.scss';
import Products from '../Products';

export default function Home({ handleAdd }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, deviceId } = useSelector((state) => state.auth.login);
  const { product } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.isEmailVerified === false) {
      dispatch(fetchSendVerifyEmail({ deviceId: deviceId }));
      setOpen(true);
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchGetAllProduct());
  }, []);

  const handleRate = () => {
    const carousel =
      product.result &&
      product?.result
        .filter((item) => {
          return Number(item.rating) >= 3;
        })
        .sort(function (a, b) {
          return b.rating - a.rating;
        });
    const [rate1, rate2, rate3] = carousel;
    const printCarousel = [rate1, rate2, rate3];
    return printCarousel;
  };

  return (
    <Box pt="240px">
      <Container>
        <Box className="Home__GroupCate">
          <Box width="22%" bgcolor="#CCC"></Box>
          <Box className="Home__GroupCate-carousel">
            {product?.result && <Carousel propsProduct={product} rateProps={handleRate} />}
          </Box>
        </Box>
        <Products handleAdd={handleAdd} />
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box-auth">
            <VerifyEmail />
            <Box className="auth-layout">
              <img src="./image/icon/VectorBag.png" alt="VectorBag" />
              <img src="./image/icon/ShopApp.png" alt="ShopApp" />
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
