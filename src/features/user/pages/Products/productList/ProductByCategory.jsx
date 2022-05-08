import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getProductByCategory } from '../../../../../api/userAPI';
import ItemCard from '../../../../../components/common/itemCard/ItemCard';
import Carousel from '../../Home/component/carousel/Carousel';
import ListIcon from '@mui/icons-material/List';
import '../../Home/home.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { fetchGetAllCategory, fetchGetAllProduct } from '../../../userSlice';

const ProductByCategory = ({ handleAdd }) => {
  const [listItem, setListItem] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const item = location.pathname.slice(1).replace('%20', ' ');
  const { category } = useSelector((state) => state.user);
  const { product } = useSelector((state) => state.user);
  useEffect(() => {
    getProductByCategory({ item }).then((data) => setListItem(data));
    dispatch(fetchGetAllProduct());
    dispatch(fetchGetAllCategory());
  }, [item]);

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
    <Box className="section-box">
      <Container>
        <Box className="Home__GroupCate">
          <Box width="20%" bgcolor="#3D464D">
            <List className="Home__Cate-list">
              <ListItem disablePadding className="Home__Cate-title">
                <ListIcon />
                Categories
              </ListItem>
              {category &&
                category.map((item, index) => {
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemButton className="Home__Cate-item">
                        <Link className="Home__Cate-link" to={`/${item}`}>
                          {item}
                        </Link>
                        <ArrowForwardIosIcon sx={{ color: '#FFF' }} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </List>
          </Box>

          <Box className="Home__GroupCate-carousel">
            {product?.result && <Carousel propsProduct={product} rateProps={handleRate} />}
          </Box>
        </Box>
        <Box mb={3} mt={3}>
          <Box className="breadCrum">
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link className="breadCrum-content" to="/">
                  Home
                </Link>
                <Typography color="text.primary" className="breadCrum-content">
                  {item}
                </Typography>
              </Breadcrumbs>
            </Stack>
          </Box>
          <Typography variant="h4" className="">
            {item}
          </Typography>

          <Grid
            container
            spacing={{ xs: 1, md: 2, xl: '10px' }}
            columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
          >
            {listItem?.result &&
              listItem?.result.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <ItemCard {...item} handleAdd={() => handleAdd(item)} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductByCategory;
