import { Avatar, Box, Breadcrumbs } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import './userDetail.scss';
export default function UserDetailById() {
  const location = useLocation();

  return (
    <Box>
      <Box>
        <h1>User Detail #{location.state.userId}</h1>
        <p>UserID: {location.state.userId}</p>
      </Box>
      <Box className="userProfile">
        <Avatar src={location.state.avatar} />

        <p style={{ fontWeight: '600' }}>{location.state.username}</p>

        <p style={{ fontWeight: '400', color: ' #2234D2' }}>{location.state.email}</p>
        <p style={{ fontWeight: '400' }}>{location.state.contact}</p>
      </Box>
      <Box>
        <p>Role: {location.state.role}</p>
        {/* <p>status {location.state.isActive}</p> */}
        {/* <p>{location.state.email}</p>
      <p>{location.state.email}</p> */}
      </Box>
    </Box>
  );
}
