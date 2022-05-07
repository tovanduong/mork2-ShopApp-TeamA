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
      <div className="breadCrumbsWrapper" role="presentation">
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
                margin: '0 auto',
              }}
              src={userDetail.avatar}
            />
            <p style={{ fontWeight: '600' }}>{userDetail.username}</p>
            <p style={{ fontWeight: '400', color: ' #2234D2' }}>{userDetail.email}</p>
            <p style={{ fontWeight: '400' }}>{userDetail.contact}</p>
          </Box>

          <Box className="userAttribute">
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
                  }}
                >
                  Admin
                </Box>
              ) : (
                <Box
                  className="attributeBox"
                  sx={{
                    background: '#E13A44',
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
                    minWidth: '50px',
                    maxHeight: '20px',
                    textAlign: 'center',
                  }}
                >
                  Active
                </Box>
              ) : (
                <Box
                  className="attributeBox"
                  sx={{
                    background: '#E13A44',
                  }}
                >
                  Disabled
                </Box>
              )}
            </Box>

            <Box className="attributeWrapper">
              Verify Email:
              {userDetail.isEmailVerified ? (
                <CheckCircleIcon sx={{ color: '#387B18' }} />
              ) : (
                <DangerousIcon sx={{ color: '#E13A44' }} />
              )}
            </Box>
            <Box className="attributeWrapper">
              Verify Contact:
              {userDetail.isContactVerified ? (
                <CheckCircleIcon sx={{ color: '#387B18' }} />
              ) : (
                <DangerousIcon sx={{ color: '#E13A44' }} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
