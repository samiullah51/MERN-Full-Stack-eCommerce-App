import React from "react";
import { Routes, Route } from "react-router-dom";
// import Pay from "./components/Pay/Pay";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Signin />} />
    </Routes>
  );
}

export default App;
