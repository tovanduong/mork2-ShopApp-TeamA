import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ListUser = React.lazy(() => import('./pages/ListUser'));
const AddEditUser = React.lazy(() => import('../userManager/pages/AddEditUser'));
const UserDetailById = React.lazy(() => import('../userManager/pages/UserDetail'));
export default function UserManager() {
  return (
    <>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path="add" element={<AddEditUser />} />
        <Route>
          <Route path="/:userId" element={<AddEditUser />} />
          <Route path="/userDetail/:userId" element={<UserDetailById />} />
        </Route>
      </Routes>
    </>
  );
}
