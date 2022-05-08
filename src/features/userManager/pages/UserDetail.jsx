import { Box, Breadcrumbs, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUserById } from '../userManagerSlice';
import './userDetail.scss';
export default function UserDetailById() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userManager.current);
  //get user by id api
  useEffect(() => {
    dispatch(getUserById(userId));
  }, []);
  return (
    <div className="userDetailWrapper">
      <div className="breadCrumsWrapper" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/user">User</Link>
          <Typography> User Detail #{userDetail.id}</Typography>
        </Breadcrumbs>
      </div>
      <Box>
        <Box>
          <h1>User Detail #{userDetail.id}</h1>
          <p>UserID: {userDetail.id}</p>
        </Box>
        <Box className="profileWrapper">
          <Box className="userProfile">
            <img
              className="avatarImg"
              style={{
                borderRadius: '50%',
                width: '238px',
                height: '238px',
                objectFit: 'cover',
              }}
              src={userDetail.avatar}
            />
            <p style={{ fontWeight: '600' }}>{userDetail.username}</p>
            <p style={{ fontWeight: '400', color: ' #2234D2' }}>{userDetail.email}</p>
            <p style={{ fontWeight: '400' }}>{userDetail.contact}</p>
          </Box>

          <Box className="userAttribute">
            <div>
              <Box className="attributeWrapper">
                Role:
                {userDetail.role === 'admin' ? (
                  <Box
                    className="attributeBox"
                    sx={{
                      background: '#4B9528',
                      minWidth: '50px',
                      maxHeight: '20px',
                      textAlign: 'center',
                      marginLeft: '90px',
                    }}
                  >
                    Admin
                  </Box>
                ) : (
                  <Box
                    className="attributeBox"
                    sx={{
                      background: '#E13A44',
                      minWidth: '70px',
                      maxHeight: '20px',
                      textAlign: 'center',
                      marginLeft: '70px',
                    }}
                  >
                    Customer
                  </Box>
                )}
              </Box>
              <Box className="attributeWrapper">
                Status:
                {userDetail.isActive ? (
                  <Box
                    className="attributeBox"
                    sx={{
                      // flex: '0.5rem',
                      background: '#4B9528',
                      minWidth: '60px',
                      maxHeight: '20px',
                      textAlign: 'center',
                      marginLeft: '70px',
                    }}
                  >
                    Active
                  </Box>
                ) : (
                  <Box
                    className="attributeBox"
                    sx={{
                      background: '#E13A44',
                      minWidth: '70px',
                      maxHeight: '20px',
                      textAlign: 'center',
                      marginLeft: '60px',
                    }}
                  >
                    Disabled
                  </Box>
                )}
              </Box>

              <Box className="attributeWrapper">
                Verify Email:
                {userDetail.isEmailVerified ? (
                  <CheckCircleIcon sx={{ color: '#387B18', marginLeft: '65px' }} />
                ) : (
                  <DangerousIcon sx={{ color: '#E13A44', marginLeft: '65px' }} />
                )}
              </Box>
              <Box className="attributeWrapper">
                Verify Contact:
                {userDetail.isContactVerified ? (
                  <CheckCircleIcon sx={{ color: '#387B18', marginLeft: '50px' }} />
                ) : (
                  <DangerousIcon sx={{ color: '#E13A44', marginLeft: '50px' }} />
                )}
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
