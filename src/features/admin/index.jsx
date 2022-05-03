import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Product from '../product';
import './admin.scss';
import NavigationAdmin from './components/navigation/NavigationAdmin';

const DashBoard = React.lazy(() => import('./pages/DashBoard'));
const Product = React.lazy(() => import('../product'));
const UserManager = React.lazy(() => import('../userManager'));

export default function Admin() {
  return (
    <>
      <div className="adminPageWrapper">
        <NavigationAdmin className="navigationAdmin" />
        <div className="adminContentWrapper">
          <Routes>
            <Route index element={<DashBoard />} />
            <Route path="/product/*" element={<Product />} />
            <Route path="/user/*" element={<UserManager />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
