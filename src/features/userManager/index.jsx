import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ListUser = React.lazy(() => import('./pages/ListUser'));
const AddEditUser = React.lazy(() => import('../userManager/pages/AddEditUser'));

export default function UserManager() {
  return (
    <>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path="add" element={<AddEditUser />} />
        <Route path="/:userId" element={<AddEditUser />} />
      </Routes>
    </>
  );
}
