import React, { useEffect, useState } from 'react';
import { Box, Rating } from '@mui/material';
import { StyledDataGrid } from '../../admin/components/dataTable/DataTable';
import { Delete, Edit } from '../../admin/components/popupConfirm/PopupConfirm';
import { CustomPagination } from '../../admin/components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductById, getListProduct } from '../../admin/adminSlice';

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
            <div>
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
          <Delete id={params.row.productId} subject={'product'} />
        </div>
      );
    },
  },
];
export function ProductTable() {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.admin.current.result);
  const totalPages = useSelector((state) => state.admin.current.totalPages);

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

  //delete product by id
  const handleDelete = async (params) => {
    console.log(params.row.productId);
    const response = await deleteProductById(params.row.productId);
    dispatch(response);
  };

  return (
    <div style={{ width: '100%' }}>
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
      <CustomPagination
        onPageCount={handlePageCount}
        totalPages={totalPages}
        handleDelete={handleDelete}
      />
    </div>
  );
}
