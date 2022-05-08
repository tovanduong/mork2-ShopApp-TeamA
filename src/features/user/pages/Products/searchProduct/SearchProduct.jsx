import { Box, Breadcrumbs, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemCard from '../../../../../components/common/itemCard/ItemCard';

const SearchProduct = ({ handleAdd }) => {
  const searchProduct = useSelector((state) => state.user.searchProduct);
  const search = useSelector((state) => state.user.search);
  console.log(search?.products?.result);

  return (
    <Container>
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
          <Typography variant="h4">
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
    </Container>
  );
};

export default SearchProduct;
