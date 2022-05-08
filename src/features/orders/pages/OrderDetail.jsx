import { Box, Breadcrumbs, Link, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderByID } from '../../../api/ordersApi';
import created_at from '../../../assets/images/created_at.svg';
import updated_at from '../../../assets/images/updated_at.svg';
import { StyledDataGrid } from '../../admin/components/dataTable/DataTable';
import OrderDetailCards from '../components/OrderDetailCards';
import './orderDetail.scss';
import dateFormat from 'dateformat';

export default function OrderDetail() {
  const { orderID } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);
  const [orderItems, setOrderItems] = useState(null);

  console.log(orderItems);
  console.log(orderDetail);

  // get product info by id
  useEffect(() => {
    if (!orderID) return;

    // IIFE
    (async () => {
      try {
        const result = await getOrderByID(orderID);

        setOrderItems(result.data.items);
        setOrderDetail(result.data.order);
      } catch (error) {
        console.log('failed to fetch order details: ', error);
      }
    })();
  }, [orderID]);

  let rowOrder = [];
  if (orderItems) {
    rowOrder = orderItems.map((item, index) => ({
      id: item.id,
      productImg: item.itemInfo.images[0].url,
      price: item.price,
      quantity: item.quantity,
      total: item.total,
    }));
  }

  const columnsUser = [
    {
      field: 'productImg',
      headerName: 'Product',
      flex: 0.5,
      // width: 48,
      renderCell: (params) => {
        return (
          <p className="tableHead">
            <img src={params.row.productImg} alt="img" />
          </p>
        );
      },
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.5,
      // width: 48,
      renderCell: (params) => {
        return <p className="tableHead">${params.row.price}</p>;
      },
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 0.5,
      // width: 48,
      renderCell: (params) => {
        return <p className="tableHead">{params.row.quantity}</p>;
      },
    },
    {
      field: 'total',
      headerName: 'Total',
      flex: 0.5,
      // width: 48,
      renderCell: (params) => {
        return <p className="tableHead">${params.row.total}</p>;
      },
    },
  ];

  return (
    <Box>
      {orderDetail && (
        <Box className="orderDetailWrapper">
          <div className="breadCrumbsWrapper" role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/admin">Dashboard</Link>
              <Link to="/admin/user">Order</Link>
              <Typography> Order #{orderID}</Typography>
            </Breadcrumbs>
          </div>

          <div className="titleOrderDetail">
            <h1 style={{ marginBottom: 0 }}>Order Detail #{orderID}</h1>
            <p className="orderID">Order ID: #{orderID}</p>
          </div>

          <Box className="formWrapper">
            <Box className="topInfoOrderDetailWrapper">
              <Box className="timeOrder">
                <p className="timeDetail">
                  <img src={created_at} alt="created" />
                  <span> Created at : {dateFormat(orderDetail.createdAt, 'dd/mm/yyyy')}</span>
                </p>

                <p className="timeDetail">
                  <img src={updated_at} alt="created" />
                  <span>Updated at : {dateFormat(orderDetail.updatedAt, 'dd/mm/yyyy')}</span>
                </p>
                <p className="timeOrderID">Order ID : {orderID}</p>
              </Box>
              <Box className="selectOrderDetailWrapper">
                {/* <p className="status">Status</p> */}
                {/* <p className="paided">Paided</p> */}
              </Box>
              <Box className="buttonUpdateOrderDetail"></Box>
            </Box>
            <div className="horizontalLine"></div>
            <OrderDetailCards orderDetail={orderDetail} />
            <div className="horizontalLine"></div>
            <Box className="orderItemsWrapper">
              <h3 className="orderItemsTitle"> Items</h3>
              <div className="horizontalLine"></div>
              <StyledDataGrid
                rows={rowOrder}
                getRowId={(row) => row.id}
                rowsPerPageOptions={[5, 10, 20]}
                columns={columnsUser}
                pageSize={5}
                autoHeight
                disableColumnMenu
                disableSelectionOnClick
                // onCellClick={handleCellClick}
              />
              <div className="horizontalLine"></div>
              <Box className="totalPriceWrapper">
                <p className="totalPriceTitle">Total Amount: </p>
                <p className="totalPrice">${orderDetail.totalPrice} </p>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
