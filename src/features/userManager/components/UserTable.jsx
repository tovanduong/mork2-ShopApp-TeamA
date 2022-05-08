import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { StyledDataGrid } from '../../admin/components/dataTable/DataTable';
import { Delete, Edit } from '../../admin/components/popupConfirm/PopupConfirm';
import { CustomPagination } from '../../admin/components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../userManagerSlice';

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
            fontSize: '18px',
            lineHeight: '18px',
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
                  height: 40,
                  width: 40,
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
                    fontSize: '18px',
                    lineHeight: '18px',
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
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '18px',
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
                  height: 40,
                  width: 40,
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
                    // fontSize: '20px',
                    // lineHeight: '23px',
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
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '18px',
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
    flex: 3,
    // width: 136,
    renderCell: (params) => {
      if (params.row.contact) {
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
            N/A
          </p>
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
              fontSize: '18px',
              lineHeight: '18px',
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
              fontSize: '18px',
              lineHeight: '18px',
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
              fontSize: '18px',
              lineHeight: '18px',
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
              fontSize: '18px',
              lineHeight: '18px',
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
              fontSize: '18px',
              lineHeight: '18px',
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
              fontSize: '18px',
              lineHeight: '18px',
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
          <Edit link={'/admin/user/add'} id={params.row.userId} subject={'user'} />
          <Delete id={params.row.userId} subject={'user'} />
        </div>
      );
    },
  },
];
export function UserTable(props) {
  const navigate = useNavigate();
  const handleCellClick = (params) => {
    navigate(`/admin/user/userDetail/${params.row.userId}`, {
      state: {
        userId: params.row.userId,
      },
    });
  };
  const dispatch = useDispatch();

  const current = useSelector((state) => state.userManager.current.result);
  const totalPages = useSelector((state) => state.userManager.current.totalPages);

  const [pageCount, setPageCount] = useState(1);

  const handlePageCount = (params) => {
    setPageCount(params);
  };
  //product list
  useEffect(() => {
    const fetchAllUsers = async () => {
      const params = {
        page: pageCount,
      };
      const response = await getAllUsers(params);
      dispatch(response);
    };
    fetchAllUsers();
  }, [dispatch, pageCount]);
  //product row
  let rowsUser = [];
  if (current) {
    rowsUser = current.map((item, index) => ({
      userNumber: index + 1,
      avatar: item.avatar,
      contact: item.contact,
      email: item.email,
      userId: item.id,
      isActive: item.isActive,
      contact: item.contact,
      isContactVerified: item.isContactVerified,
      isEmailVerified: item.isEmailVerified,
      role: item.role,
      username: item.usernamem,
    }));
  }
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <StyledDataGrid
        rows={rowsUser}
        getRowId={(row) => row.userId}
        rowsPerPageOptions={[5, 10, 20]}
        columns={columnsUser}
        pageSize={5}
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        onCellClick={handleCellClick}
      />
      <CustomPagination onPageCount={handlePageCount} totalPages={totalPages} />
    </div>
  );
}
