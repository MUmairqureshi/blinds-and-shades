import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Portfolio from "../screens/Portfolio";
import Blogs from "../screens/Blogs";
import Shop from "../screens/Shop";
import Checkout from "../screens/Checkout";
import Contact from "../screens/Contact";
import Register from "../screens/Register";
import ProductDetail from "../screens/ProductDetail";
import Account from "../screens/Acccount";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import { BlogDetailPage } from "../screens/Blog-detail/BlogDetailPage";
import Cart from "../screens/Cart/Cart";

const Router = () => {
  return (
    <BrowserRouter basename="blinds-and-shades">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="blogs/blog-detail/:id" element={<BlogDetailPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
