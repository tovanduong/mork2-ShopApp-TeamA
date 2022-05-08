import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs, Container, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemCard from '../../../../../components/common/itemCard/ItemCard';
import arrow_left from '../../../../../assets/images/arrow_left.svg';
import arrow_right from '../../../../../assets/images/arrow_right.svg';
import './searchProduct.scss';
import { useEffect, useState } from 'react';
import { fetchGetListProductByCategory } from '../../../userSlice';

const SearchProduct = ({ handleAdd }) => {
  const searchProduct = useSelector((state) => state.user.searchProduct);
  const search = useSelector((state) => state.user.search);
  const [listProductByCategory, setListProductByCategory] = useState(null);
  const dispatch = useDispatch();

  let category = search.products?.result[0]?.category;

  // get list product by category
  useEffect(() => {
    if (category) {
      // IIFE
      (async () => {
        try {
          const listProduct = await dispatch(fetchGetListProductByCategory(category));
          setListProductByCategory(listProduct.payload.result);
        } catch (error) {
          console.log('failed to fetch product details: ', error);
        }
      })();
    }
  }, [category]);

  return (
    <Container className="searchProductWrapper">
      <Box className="section-box">
        <Box className="breadCrum">
          <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link className="breadCrum-content" to="/">
                Home
              </Link>
              <Typography color="text.primary" className="breadCrum-content">
                Search
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h5">
            Have {search?.products?.result.length} result search for key-word:{' '}
            {searchProduct.search}
          </Typography>
        </Box>
        {search?.products?.result.length === 0 && (
          <Typography variant="h5" paddingTop={10}>
            No product match for key-word :(
          </Typography>
        )}
        <Grid
          container
          spacing={{ xs: 1, md: 2, xl: '10px' }}
          columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
        >
          {search?.products?.result &&
            search?.products?.result.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <ItemCard {...item} handleAdd={() => handleAdd(item)} />
                </Grid>
              );
            })}
        </Grid>
      </Box>

      <Box className="relatedProducts">
        <div className="titleRelateProducts">
          <h2>Related Products</h2>
          <span className="horizontalLine"></span>
          <img alt="arrow" className="arrow arrowLeft" src={arrow_left} />
          <img alt="arrow" className="arrow arrowLeft" src={arrow_right} />
        </div>
        <Box className="listRelatedProduct" mb={3}>
          <Grid
            container
            spacing={{ xs: 1, md: 2, xl: '10px' }}
            columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
          >
            {listProductByCategory &&
              listProductByCategory.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <ItemCard
                      {...item}
                      //  handleAdd={() => handleAdd(item)}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SearchProduct;
