import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/common/header/Header';
import CheckOut from './pages/Products/checkOut/checkOut';
import ProductByCategory from './pages/Products/productList/ProductByCategory';
import SearchProduct from './pages/Products/searchProduct/SearchProduct';
import ShoppingCart from './pages/Products/shoppingCart/ShoppingCart';
import {
  countIncrease,
  countRemove,
  fetchAddItemToCart,
  fetchCreateCart,
  fetchDelItem,
  fetchUpdateCart,
} from './userSlice';

const Home = React.lazy(() => import('./pages/Home'));
const Info = React.lazy(() => import('./pages/Info'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductInfo = React.lazy(() => import('./pages/Products/ProductInfo/ProductInfo'));

export default function User() {
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    const isCreatCart = JSON.parse(localStorage.getItem('createCartUser'));
    const user = localStorage.getItem('user');

    if (isCreatCart && user) {
      const isCart = JSON.parse(localStorage.getItem('cartUser'));
      console.log(product);
      console.log(isCreatCart);
      console.log(isCart);
      const productExits = isCart?.items.find(
        (item) => item.itemCartInfo.id === product?.itemCartInfo?.id
      );
      console.log(productExits);
      const moreProduct = isCreatCart?.items.find((item) => item.itemCartInfo.id === product.id);
      console.log(moreProduct);
      dispatch(countIncrease());
      if (productExits) {
        dispatch(
          fetchUpdateCart({
            id: product.id,
            quantity: product.quantity + 1,
            total: (product.quantity + 1) * product.price,
          })
        );

        return;
      }
      if (moreProduct) {
        console.log('nothing: ', isCreatCart.cart.id);
        console.log(moreProduct);
        dispatch(
          fetchUpdateCart({
            id: moreProduct.id,
            quantity: moreProduct.quantity + 1,
            total: (moreProduct.quantity + 1) * product.price,
          })
        );
        return;
      }
      dispatch(
        fetchAddItemToCart({
          cartId: isCreatCart.cart.id,
          productId: product.id,
          quantity: 1,
          price: product.price,
          total: product.price,
        })
      );
    } else {
      if (user) {
        const user = JSON.parse(localStorage.getItem('user'));
        const cart = { totalPrice: product.price, userId: user?.id };
        const itemArr = [
          {
            productId: product.id,
            quantity: 1,
            price: product.price,
            total: product.price,
          },
        ];
        dispatch(fetchCreateCart({ cart, itemArr }));
        dispatch(countIncrease());
      }
    }
  };

  const handleRemoveProduct = (product) => {
    const isCart = JSON.parse(localStorage.getItem('cartUser'));
    console.log(product);
    const productExits = isCart?.items.find(
      (item) => item.itemCartInfo.id === product.itemCartInfo.id
    );

    if (productExits) {
      dispatch(
        fetchUpdateCart({
          id: product.id,
          quantity: product.quantity - 1,
          total: (product.quantity - 1) * product.price,
        })
      );
    }
  };

  const handleClose = (item) => {
    const isCart = JSON.parse(localStorage.getItem('cartUser'));
    dispatch(fetchDelItem({ id: item.id }));
    dispatch(countRemove());
    if (isCart.items.length === 0) {
      localStorage.removeItem('createCartUser');
    }
    dispatch(
      fetchUpdateCart({
        id: item.id,
        quantity: item.quantity,
        total: item.quantity,
      })
    );
    console.log(item.quantity);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home handleAdd={handleAddProduct} />} />
        <Route path="/myAccount/*" element={<Info />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search/" element={<SearchProduct handleAdd={handleAddProduct} />} />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              handleAdd={handleAddProduct}
              handleRemove={handleRemoveProduct}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path="/product/:productID"
          element={<ProductInfo handleAdd={handleAddProduct} handleRemove={handleRemoveProduct} />}
        />
        <Route path="/cart/:cartId" element={<CheckOut />} />
        <Route path="/:item" element={<ProductByCategory handleAdd={handleAddProduct} />} />
      </Routes>
    </>
  );
}
