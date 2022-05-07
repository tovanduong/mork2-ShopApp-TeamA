import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { StyledDataGrid } from '../../admin/components/dataTable/DataTable';
import { Delete, Edit } from '../../admin/components/popupConfirm/PopupConfirm';
import { CustomPagination } from '../../admin/components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../orderSlice';

const columnsOrder = [
  {
    field: 'orderNumber',
    headerName: 'ID',
    flex: 0.5,

    renderCell: (params) => {
      return (
        <strong
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '18px',
            textAlign: 'center',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.orderNumber}
        </strong>
      );
    },
  },
  {
    field: 'userId',
    headerName: 'User Id',
    flex: 3,
    // width: '1000px',
    renderCell: (params) => {
      return (
        <strong
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '18px',
            textAlign: 'center',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.userId}
        </strong>
      );
    },
  },
  {
    field: 'totalPrice',
    headerName: 'Amount',
    flex: 3,
    // width: 136,
    renderCell: (params) => {
      return (
        <div
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '18px',
            /* identical to box height */

            color: '#000000',
          }}
        >
          ${params.row.totalPrice}
        </div>
      );
    },
  },

  {
    field: 'address',
    headerName: 'Address',
    flex: 7,
    // width: 136,
    renderCell: (params) => {
      return (
        <div
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '18px',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.address}
        </div>
      );
    },
  },
  {
    field: 'contact',
    headerName: 'Contact',
    flex: 4,
    // width: 136,
    renderCell: (params) => {
      return (
        <div
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '18px',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.contact}
        </div>
      );
    },
  },
  {
    field: 'createdAt',
    headerName: 'Date',
    flex: 7,
    // width: 182,
    renderCell: (params) => {
      return (
        <div
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '18px',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.createdAt}
        </div>
      );
    },
  },
  {
    field: 'isPaid',
    headerName: 'Paid',
    flex: 2,
    // width: 157,
    renderCell: (params) => {
      if (params.row.isPaid) {
        return (
          <Box
            sx={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              textAlign: 'center',
              fontWeight: 400,
              background: '#FFD333',
              borderRadius: '20px',
              minWidth: '40px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            Yes
          </Box>
        );
      } else
        return (
          <Box
            sx={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              textAlign: 'center',
              fontWeight: 400,
              background: '#366AB8',
              borderRadius: '20px',
              minWidth: '40px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            No
          </Box>
        );
    },
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 3,
    // width: 134,
    renderCell: (params) => {
      return (
        <p
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '18px',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.status}
        </p>
      );
    },
  },
  {
    sortable: false,
    renderCell: (params) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Edit id={params.row.orderId} subject={'order'} />
          <Delete id={params.row.orderId} subject={'order'} />
        </div>
      );
    },
  },
];

export function OrderTable() {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.orders.current.result);
  const totalPages = useSelector((state) => state.orders.current.totalPages);

  const [pageCount, setPageCount] = useState(1);
  console.log(current);
  const handlePageCount = (params) => {
    setPageCount(params);
  };

  //product list
  useEffect(() => {
    const fetchAllOrders = async () => {
      const params = {
        page: pageCount,
      };
      const response = await getAllOrders(params);

      dispatch(response);
    };
    fetchAllOrders();
  }, [dispatch, pageCount]);
  //order row

  let rowsOrders = [];
  if (current) {
    rowsOrders = current.map((item, index) => ({
      orderId: item.id,
      orderNumber: index + 1,
      userId: item.userId,
      address: item.address,
      contact: item.contact,
      createdAt: item.createdAt,
      isPaid: item.isPaid,
      paidAt: item.paidAt,
      paymentMethod: item.paymentMethod,
      status: item.status,
      totalPrice: item.totalPrice,
      updatedAt: item.updatedAt,
    }));
  }
  return (
    <div style={{ width: '100%' }}>
      <StyledDataGrid
        rows={rowsOrders}
        getRowId={(row) => row.orderId}
        rowsPerPageOptions={[5, 10, 20]}
        columns={columnsOrder}
        pageSize={10}
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        Pagination="null"
      />
      <CustomPagination onPageCount={handlePageCount} totalPages={totalPages} />
    </div>
  );
}
