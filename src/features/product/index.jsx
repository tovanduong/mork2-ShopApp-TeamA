import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ListProduct = React.lazy(() => import('./pages/ListProduct'));
const AddEditProduct = React.lazy(() => import('./pages/AddEditProduct'));

export default function Product() {
  return (
    <>
      <Routes>
        <Route index element={<ListProduct />} />
        <Route path="add" element={<AddEditProduct />} />
        <Route path="edit" element={<AddEditProduct />} />
      </Routes>
    </>
  );
}
