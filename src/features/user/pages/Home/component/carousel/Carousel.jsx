import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "./carousel.scss";

const Carousel = ({ propsProduct, rateProps }) => {
  const { result } = propsProduct;
  return (
    <Box width="100%" ml="11px">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {result &&
          rateProps().map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Box className="Product-Slider">
                  <img src="./image/carousel.jpg" alt="product" />
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Box className="list-carousel">
        <Box className="carousel-item">
          <img src="./image/carousel.jpg" alt="" />
        </Box>
        <Box className="carousel-item">
          <img src="./image/carousel.jpg" alt="" />
        </Box>
        <Box className="carousel-item">
          <img src="./image/carousel.jpg" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
