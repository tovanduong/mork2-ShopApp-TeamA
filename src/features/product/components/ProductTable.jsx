import React, { useEffect, useState } from 'react';
import { Box, IconButton, Rating } from '@mui/material';
import { StyledDataGrid } from '../../admin/components/dataTable/DataTable';
import { Delete, Edit } from '../../admin/components/popupConfirm/PopupConfirm';
import { CustomPagination } from '../../admin/components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductById, getListProduct } from '../../admin/adminSlice';
import deleteButton from '../../../assets/images/delete_button.svg';

export function ProductTable() {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.admin.current.result);
  const totalPages = useSelector((state) => state.admin.current.totalPages);

  const [pageCount, setPageCount] = useState(1);
  const [isDataChange, setIsDataChange] = useState(false);
  const [open, setOpen] = useState(false);
  const [rowProductId, setRowProductId] = useState();

  const handleClickOpen = (params) => {
    setOpen(true);
    setRowProductId(params);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
  }, [dispatch, isDataChange, pageCount]);

  //delete by id
  const dispatchDelete = async (productId) => {
    try {
      const response = await deleteProductById(productId);
      dispatch(response);
      setOpen(false);
      setIsDataChange(!isDataChange);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = () => {
    dispatchDelete(rowProductId);
  };
  //product row
  let rowsProduct = [];
  if (current) {
    rowsProduct = current.map((item, index) => ({
      key: item.id,
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
              fontSize: '18px',
              lineHeight: '18px',
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
                  height: 40,
                  width: 40,
                  objectFit: 'cover',
                  marginRight: '11px',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
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
                  {params.row.name}
                </div>
                <div
                  style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    marginTop: '0',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '18px',
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
              fontSize: '18px',
              lineHeight: '18px',
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
              fontSize: '18px',
              lineHeight: '18px',
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
                fontSize: '18px',
                lineHeight: '18px',
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
                fontSize: '18px',
                lineHeight: '18px',
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
                fontSize: '18px',
                lineHeight: '18px',
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
              fontSize: '18px',
              lineHeight: '18px',
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
            <Rating name="size-small" defaultValue={params.row.rating} size="medium" readOnly />
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
            <IconButton
              className="delete-button"
              onClick={(e) => handleClickOpen(params.row.productId)}
            >
              <img src={deleteButton} />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <StyledDataGrid
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
      <CustomPagination onPageCount={handlePageCount} totalPages={totalPages} />
      <Delete
        id={rowProductId}
        open={open}
        subject={'product'}
        handleDelete={handleDelete}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </div>
  );
}
