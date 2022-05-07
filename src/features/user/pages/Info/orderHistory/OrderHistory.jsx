import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemOrder from '../../../../../components/common/itemOrder/ItemOrder';
import { fetchGetOrder, setFilter } from '../../../userSlice';
import Pagination from '@mui/material/Pagination';
import './orderHistory.scss';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.user.filter);
  const myOder = useSelector((state) => state.user.myOrder);
  console.log(myOder.orders);
  useEffect(() => {
    dispatch(fetchGetOrder(filter));
  }, [filter]);

  const handleChange = (e, page) => {
    console.log(page);
    dispatch(
      setFilter({
        ...filter,
        currentPage: page,
      })
    );
  };
  return (
    <Box>
      <Typography variant="h4" className="myInfo-order">
        Order History
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
        {myOder &&
          myOder.orders?.result.map((item) => {
            return <ItemOrder {...item} key={item.id} />;
          })}
      </Box>
      <hr />
      <Pagination
        shape="rounded"
        color="primary"
        className="myInfo-order-pagination"
        count={myOder.orders?.totalPages}
        page={filter.currentPage}
        onChange={handleChange}
      />
    </Box>
  );
};

export default OrderHistory;
