/** @format */

import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Pagination, PaginationItem, Rating } from '@mui/material';
import './dataTable.scss';
import styled from '@emotion/styled';
import { Delete, Edit } from '../popupConfirm/PopupConfirm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListProduct } from '../../adminSlice';
import { CustomPagination } from '../pagination/Pagination';

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
              alt="product"
              style={{
                height: 50,
                width: 50,
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
                ID: {params.row.productId}
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
          <Edit link={'/admin/product/add'} id={params.row.productId} subject={'product'} />
          <Delete productId={params.row.productId} subject={'product'} />
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
          <Edit link={'/admin/user/add'} id={params.row.id} subject={'user'} />
          <Delete productId={params.row.id} subject={'user'} />
        </div>
      );
    },
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
  root: {
    '& .MuiDataGrid-renderingZone': {
      maxHeight: 'none !important',
    },
    '& .MuiDataGrid-cell': {
      lineHeight: 'unset !important',
      maxHeight: 'none !important',
      whiteSpace: 'normal',
    },
    '& .MuiDataGrid-row': {
      maxHeight: 'none !important',
    },
  },
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

export function ProductTable() {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.admin.current.result);
  const totalPages = useSelector((state) => state.admin.current.totalPages);
  const currentPage = useSelector((state) => state.admin.current.currentPage);
  const [pageCount, setPageCount] = useState(1);

  const handlePageCount = (params) => {
    setPageCount(params);
  };
  //product list
  useEffect(() => {
    const fetchGetListProduct = async () => {
      const params = {
        page: pageCount,
      };
      const response = await getListProduct(params);

      dispatch(response);
    };
    fetchGetListProduct();
  }, [dispatch, pageCount]);
  //product row
  let rowsProduct = [];
  if (current) {
    rowsProduct = current.map((item, index) => ({
      // key: item.id,
      productNumber: index + 1,
      productId: item.id,
      name: item.name,
      avatar: item.images[0].url,
      brand: item.brand,
      category: item.category,
      countInStock: item.countInStock,
      price: item.price,
      rating: item.rating,
    }));
  }
  return (
    <div style={{ width: '100%' }}>
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
        getRowId={(row) => row.productId}
        rowsPerPageOptions={[5, 10, 20]}
        columns={columnsProduct}
        pageSize={10}
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        Pagination="null"
      />
      <CustomPagination
        onPageCount={handlePageCount}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}

export function UserTable(props) {
  const navigate = useNavigate();
  const handleCellClick = (params) => {
    navigate(`/admin/user/userDetail/${params.row.id}`, {
      state: {
        userId: params.row.id,
        avatar: params.row.avatar,
        username: params.row.username,
        contact: params.row.contact,
        email: params.row.email,
        role: params.row.role,
        isEmailVerified: params.row.isEmailVerified,
        isContactVerified: params.row.isContactVerified,
        isActive: params.row.isActive,
      },
    });
  };
  return (
    <div style={{ width: '100%' }}>
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
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        onCellClick={handleCellClick}
      />
      <CustomPagination />
    </div>
  );
}
