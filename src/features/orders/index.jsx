import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ListOrder = React.lazy(() => import('./pages/ListOrder'));
const OrderDetail = React.lazy(() => import('./pages/OrderDetail'));

export default function Orders() {
  return (
    <>
      <Routes>
        <Route index element={<ListOrder />} />
        <Route path="/:orderID" element={<OrderDetail />} />
      </Routes>
    </>
  );
}
