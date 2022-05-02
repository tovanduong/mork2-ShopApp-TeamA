/** @format */

import * as React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { Box, Pagination, PaginationItem, Rating } from '@mui/material';
import './dataTable.scss';
import styled from '@emotion/styled';
import { Delete, Edit } from '../popupConfirm/PopupConfirm';

const columnsProduct = [
  {
    field: 'productNumber',
    headerName: 'ID',
    flex: 1,
    renderCell: (params) => {
      return (
        <strong
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '23px',
            textAlign: 'center',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.productNumber}
        </strong>
      );
    },
  },
  {
    field: 'name',
    headerName: 'Product',
    flex: 6,
    renderCell: (params) => {
      return (
        <div>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <img
              src={params.row.avatar}
              style={{
                height: 60,
                width: 60,
                objectFit: 'cover',
                marginRight: '11px',
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '23px',
                  /* identical to box height */

                  color: '#000000',
                }}
              >
                {params.row.name}
              </div>
              <div
                style={{
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  marginTop: '0',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '21px',
                  color: ' #929395',
                }}
              >
                ID: {params.row.id}
              </div>
            </div>
          </Box>
        </div>
      );
    },
  },
  {
    field: 'brand',
    headerName: 'Brand',
    flex: 4,
    renderCell: (params) => {
      return (
        <div
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '23px',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.brand}
        </div>
      );
    },
  },
  {
    field: 'category',
    headerName: 'Category',
    flex: 4,
    renderCell: (params) => {
      return (
        <div
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '23px',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.category}
        </div>
      );
    },
  },
  {
    field: 'countInStock',
    headerName: 'Stock',
    flex: 4,
    renderCell: (params) => {
      if (!params.row.countInStock) {
        return (
          <p
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            Not in stock
          </p>
        );
      } else if (params.row.countInStock === 1) {
        return (
          <p
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            {params.row.countInStock} item
          </p>
        );
      } else
        return (
          <p
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            {params.row.countInStock} items
          </p>
        );
    },
  },
  {
    field: 'price',
    headerName: 'Price',
    flex: 4,
    renderCell: (params) => {
      return (
        <div
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '23px',
            /* identical to box height */

            color: '#000000',
          }}
        >
          ${params.row.price}
        </div>
      );
    },
  },
  {
    field: 'rating',
    headerName: 'Rating',
    flex: 5,
    renderCell: (params) => {
      return (
        <div>
          <Rating name="size-small" defaultValue={params.row.rating} size="small" />
        </div>
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
          <Edit link={'/admin/product/add'} id={params.row.id} />
          <Delete productId={params.row.id} subject={'product'} />
        </div>
      );
    },
  },
];
const columnsUser = [
  {
    field: 'userNumber',
    headerName: 'ID',
    flex: 0.5,
    // width: 48,
    renderCell: (params) => {
      return (
        <strong
          style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '23px',
            textAlign: 'center',
            /* identical to box height */

            color: '#000000',
          }}
        >
          {params.row.userNumber}
        </strong>
      );
    },
  },
  {
    field: 'username',
    headerName: 'User',
    flex: 7,
    // width: '1000px',
    renderCell: (params) => {
      if (params.row.role === 'admin') {
        return (
          <div>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={params.row.avatar}
                style={{
                  height: 60,
                  width: 60,
                  objectFit: 'cover',
                  marginRight: '11px',
                }}
              />
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '23px',
                    /* identical to box height */

                    color: '#000000',
                  }}
                >
                  {params.row.username}
                  <Box
                    sx={{
                      background: '#4B9528',
                      color: ' #FFFFFF',
                      marginLeft: '26px',
                      borderRadius: '10px',
                      minWidth: '65px',
                      fontFamily: 'Arial',
                      fontSize: '12px',
                      textAlign: 'center',
                    }}
                  >
                    Admin
                  </Box>
                </div>
                <div
                  style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    marginTop: '0',
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '21px',
                    color: ' #929395',
                  }}
                >
                  {params.row.email}
                </div>
              </div>
            </Box>
          </div>
        );
      } else
        return (
          <div>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={params.row.avatar}
                style={{
                  height: 60,
                  width: 60,
                  objectFit: 'cover',
                  marginRight: '11px',
                }}
              />
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '23px',
                    /* identical to box height */

                    color: '#000000',
                  }}
                >
                  {params.row.username}
                  <Box
                    sx={{
                      background: '#E13A44',
                      color: ' #FFFFFF',
                      marginLeft: '26px',
                      borderRadius: '10px',
                      minWidth: '65px',
                      fontFamily: 'Arial',
                      fontSize: '12px',
                      textAlign: 'center',
                    }}
                  >
                    Customer
                  </Box>
                </div>
                <div
                  style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    marginTop: '0',
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '21px',
                    color: ' #929395',
                  }}
                >
                  {params.row.email}
                </div>
              </div>
            </Box>
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
            fontSize: '20px',
            lineHeight: '23px',
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
    field: 'isActive',
    headerName: 'Status',
    flex: 2,
    // width: 182,
    renderCell: (params) => {
      if (params.row.isActive) {
        return (
          <div
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            Active
          </div>
        );
      } else
        return (
          <div
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            Disabled
          </div>
        );
    },
  },
  {
    field: 'verifyEmail',
    headerName: 'Verify Email',
    flex: 3,
    // width: 157,
    renderCell: (params) => {
      if (params.row.isEmailVerified) {
        return (
          <p
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            Yes
          </p>
        );
      } else
        return (
          <p
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            No
          </p>
        );
    },
  },
  {
    field: 'verifyContact',
    headerName: 'Verify Contact',
    flex: 3,
    // width: 134,
    renderCell: (params) => {
      if (params.row.isContactVerified) {
        return (
          <p
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            Yes
          </p>
        );
      } else
        return (
          <p
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
              /* identical to box height */

              color: '#000000',
            }}
          >
            No
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
          <Edit link={'/admin/user/add'} id={params.row.id} />
          <Delete productId={params.row.id} subject={'user'} />
        </div>
      );
    },
  },
];

const rowsProduct = [
  {
    productNumber: 1,
    id: 164,
    name: 'Puma 2',
    avatar: 'https://giayxshop.vn/wp-content/uploads/2019/03/MG_5961-600x600.jpg',
    brand: 'Puma',
    category: 'Shoes',
    countInStock: 15,
    price: 250,
    rating: 3,
  },
];

const rowsUser = [
  {
    userNumber: 1,
    id: 248,
    username: 'quang updated1',
    email: 'cs32ddsv@gmail.com',
    contact: '0989279321',
    avatar:
      'https://res.cloudinary.com/devjs/image/upload/v1650167751/uploads_media/1650167751540_bb5cqu.jpg',
    role: 'admin',
    isEmailVerified: true,
    isContactVerified: true,
    isActive: true,
  },
];

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,

  fontFamily: ['Arial'].join(','),

  '& .MuiDataGrid-columnsContainer,.MuiDataGrid-footerContainer': {
    border: 'none',
  },
  '& .MuiDataGrid-footerContainer': {
    display: 'flex',
    flexDirection: ' row-reverse',
    marginLeft: '32px',
  },
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      renderItem={(props2) => (
        <PaginationItem
          {...props2}
          disableRipple
          sx={{
            border: '1px solid #DFE3E8',
            boxSizing: 'border-box',
            borderRadius: ' 4px',
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '20px',
            /* or 143% */

            textAlign: 'center',

            '&.MuiPaginationItem-root': {
              background: '#DFE3E8',
              color: '#212B36',
            },
            '&.Mui-selected': {
              background: '#FFD333',
              color: '#000000',
            },

            /* Dark Grey / 400 */
          }}
        />
      )}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
export function ProductTable() {
  return (
    <div style={{ height: 400, width: 1153 }}>
      <StyledDataGrid
        sx={{
          '.MuiDataGrid-columnHeaders': {
            borderTop: '2px solid #929395',
            borderBottom: 'none',
          },
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            border: 'none',
          },
          '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
          },

          '.MuiDataGrid-cell': {
            borderTop: '1px solid #929395',
            borderBottom: 'none',
            backgroundColor: 'transparent',
          },
        }}
        rows={rowsProduct}
        rowsPerPageOptions={[5, 10, 20]}
        columns={columnsProduct}
        pageSize={5}
        disableColumnMenu
        disableSelectionOnClick
        components={{
          Pagination: CustomPagination,
        }}
      />
    </div>
  );
}
export function UserTable() {
  return (
    <div style={{ height: 400, width: 1153 }}>
      <StyledDataGrid
        sx={{
          '.MuiDataGrid-columnHeaders': {
            borderTop: '2px solid #929395',
            borderBottom: 'none',
          },
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            border: 'none',
          },
          '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
          },

          '.MuiDataGrid-cell': {
            borderTop: '1px solid #929395',
            borderBottom: 'none',
            backgroundColor: 'transparent',
          },
        }}
        rows={rowsUser}
        rowsPerPageOptions={[5, 10, 20]}
        columns={columnsUser}
        pageSize={5}
        disableColumnMenu
        disableSelectionOnClick
        components={{
          Pagination: CustomPagination,
        }}
      />
    </div>
  );
}
