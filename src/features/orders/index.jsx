import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ListOrder = React.lazy(() => import('./pages/ListOrder'));

export default function Orders() {
  return (
    <>
      <Routes>
        <Route index element={<ListOrder />} />
        {/* <Route path="add" element={<AddEditProduct />} />
        <Route path="edit" element={<AddEditProduct />} /> */}
      </Routes>
    </>
  );
}
