import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs, Button, Container, Rating, Stack, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productApi from '../../../../../api/productApi';
import arrow_left from '../../../../../assets/images/arrow_left.svg';
import arrow_right from '../../../../../assets/images/arrow_right.svg';
import shoe_large from '../../../../../assets/images/shoe_large.png';
import shoe_small_1 from '../../../../../assets/images/shoe_small-1.png';
import shoe_small_2 from '../../../../../assets/images/shoe_small-2.png';
import shoe_small_3 from '../../../../../assets/images/shoe_small-3.png';
import shoe_small_4 from '../../../../../assets/images/shoe_small-4.png';
import shoe_small_5 from '../../../../../assets/images/shoe_small-5.png';
import './productInfor.scss';

const shoes_small = [shoe_small_1, shoe_small_2, shoe_small_3, shoe_small_4, shoe_small_5];

const ProductInfo = () => {
  const [value, setValue] = useState('description');
  const [productInfo, setProductInfo] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { productID } = useParams();

  // get product info by id
  useEffect(() => {
    if (!productID) return;

    // IIFE
    (async () => {
      try {
        const result = await productApi.getProductById(productID);
        console.log(result.data);
        setProductInfo(result.data.product);
      } catch (error) {
        console.log('failed to fetch student details: ', error);
      }
    })();
  }, [productID]);

  return (
    <Container className="productInforWrapper section-box">
      {productInfo && (
        <Box>
          <Box>
            <Box className="breadCrum">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link className="breadCrum-content" to="/">
                    Home
                  </Link>
                  <Link className="breadCrum-content" to="/shoes">
                    {productInfo.category}
                  </Link>

                  <Typography key="3" color="text.primary" className="breadCrum-content">
                    {productInfo.name}
                  </Typography>
                </Breadcrumbs>
              </Stack>
            </Box>
          </Box>
          <Box className="productInfo">
            <Box className="productImage">
              <Box className="productImageLarge">
                <img
                  alt="image_large"
                  className="imgLarge"
                  src={productInfo.images[0].url || shoe_large}
                />
              </Box>
              <Box className="productImageSmall">
                {shoes_small.map((shoe_small) => (
                  <img key={shoe_small} alt={shoe_small} className="imgSmall" src={shoe_small} />
                ))}
              </Box>
            </Box>

            <Box className="productSelection">
              <h1 className="titleProduct">{productInfo.name}</h1>
              <Box className="rated">
                <Rating
                  name="simple-controlled"
                  value={productInfo.rating}
                  readOnly
                  // onChange={(event, newValue) => {
                  // setValue(newValue);
                  // }}
                />
                <span className="breakContent">|</span>
                <span>150 Reviews</span>
                <span className="breakContent">|</span>
                <span>3k Sold</span>
              </Box>
              <Box className="productDescription">{productInfo.description}</Box>
              <span className="breakLine"></span>
              <Box className="productOtherDetails">
                <div>
                  Availability:{' '}
                  {productInfo.countInStock > 0 ? (
                    <span className="inStock">In Stock</span>
                  ) : (
                    <span className="soldOut">Sold Out</span>
                  )}
                </div>
                <div>Brand: {productInfo.brand}</div>
                <div>SKU: 83690/32</div>
              </Box>
              <Box className="productPrice">
                <span className="price">${productInfo.price}</span>
                <span className="saleOfPrice">50% Off</span>
              </Box>
              <Box className="productSetColor">
                <h3 className="setColor-title">Select Color:</h3>
                <div className="colors" style={{ color: 'red' }}>
                  {' '}
                  four colors
                </div>
              </Box>
              <Box className="productQuanlity">
                <h3>Quantity:</h3>
                <div
                  className="chooseQuanlity"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div style={{ marginRight: '20px' }}>choose quanlity</div>
                  <Button variant="contained" size="large" startIcon={<AddShoppingCartIcon />}>
                    Add to cart
                  </Button>
                </div>
              </Box>
              <Box className="rate">
                <h3>Rate:</h3>
                <span className="productStars">
                  <Rating
                    name="simple-controlled"
                    value={productInfo.rating}
                    // size="large"
                    // onChange={(event, newValue) => {
                    // setValue(newValue);
                    // }}
                  />
                </span>
              </Box>
            </Box>
          </Box>
          <Box className="productDetails">
            <Box className="productDetailContent" sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'primary' }}>
                  <TabList
                    className="tabListWrapper"
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab className="tabs" label="description" value="description" />
                    <Tab className="tabs" label="specification" value="specification" />
                    <Tab className="tabs" label="reviews" value="reviews" />
                  </TabList>
                </Box>
                <Box className="contentTab">
                  <TabPanel value="description">
                    <Box sx={{ width: '100%' }}>
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={false} />
                    </Box>
                  </TabPanel>
                  <TabPanel value="specification">
                    <Box sx={{ width: '100%' }}>
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={false} />
                    </Box>
                  </TabPanel>
                  <TabPanel value="reviews">phần này của Hiếu làm</TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>

          <Box className="relatedProducts">
            <div className="titleRelateProducts">
              <h2>Related Products</h2>
              <span className="horizontalLine"></span>
              <img alt="arrow" className="arrow arrowLeft" src={arrow_left} />
              <img alt="arrow" className="arrow arrowLeft" src={arrow_right} />
            </div>
            <Box className="listRelatedProduct">
              <Skeleton variant="rectangular" width={210} height={210} />
              <Skeleton variant="rectangular" width={210} height={210} />
              <Skeleton variant="rectangular" width={210} height={210} />
              <Skeleton variant="rectangular" width={210} height={210} />
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default ProductInfo;
