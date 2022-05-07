import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/common/header/Header';
import CheckOut from './pages/Products/checkOut/checkOut';
import ProductInfo from './pages/Products/ProductInfo/ProductInfo';
import ShoppingCart from './pages/Products/shoppingCart/ShoppingCart';
import { fetchAddItemToCart, fetchCreateCart, fetchUpdateCart } from './userSlice';

const Home = React.lazy(() => import('./pages/Home'));
const Info = React.lazy(() => import('./pages/Info'));
const Products = React.lazy(() => import('./pages/Products'));

export default function User() {
  const dispatch = useDispatch();
  const handleAddProduct = (product) => {
    const isCreatCart = JSON.parse(localStorage.getItem('createCartUser'));

    console.log(product);
    if (isCreatCart) {
      const isCart = JSON.parse(localStorage.getItem('cartUser'));
      const productExits = isCart?.items.find(
        (item) => item.itemCartInfo.id === product?.itemCartInfo?.id
      );

      const moreProduct = isCreatCart?.items.find((item) => item.itemCartInfo.id === product.id);

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

      if (!moreProduct) {
        console.log('nothing: ', isCreatCart.cart.id);
        dispatch(
          fetchAddItemToCart({
            cartId: isCreatCart.cart.id,
            productId: product.id,
            quantity: 1,
            price: product.price,
            total: product.price,
          })
        );
      }
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      const cart = { totalPrice: product.price, userId: user.id };
      const itemArr = [
        {
          productId: product.id,
          quantity: 1,
          price: product.price,
          total: product.price,
        },
      ];
      dispatch(fetchCreateCart({ cart, itemArr }));
    }
  };

  const handleRemoveProduct = (product) => {
    const isCart = JSON.parse(localStorage.getItem('cartUser'));
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

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home handleAdd={handleAddProduct} />} />
        <Route path="/myAccount/*" element={<Info />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={<ShoppingCart handleAdd={handleAddProduct} handleRemove={handleRemoveProduct} />}
        />
        <Route path="/product/:productID" element={<ProductInfo />} />
        <Route path="/cart/:cartId" element={<CheckOut />} />
      </Routes>
    </>
  );
}
