import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import SignUp from './pages/Auth/SignUp'; // Import SignUp
import Login from './pages/Auth/Login';

import Services from './pages/Services';
import Cart from "./pages/Cart";
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import ContactUs from './pages/ContactUs';
import Bidding from './pages/Bidding';
import TestingComp from './pages/TestingComp';
import Ctesting from './pages/ctesting';
import { AuthProvider } from './ContextApi/AuthContext';

const Main = () => {
  let user = ""

  const [cartItems, setCartItems] = useState([]);
  

  return (
    <Router>
      <AuthProvider>

      <NavBar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/productPage/:category" element={<ProductPage setCartItems={setCartItems} />} />
          {/* <Route path="/product/:productId" element={<ProductDetail />} /> */}
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/product/:productId" element={<ProductDetail setCartItems={setCartItems} />} />
          <Route path="/Bidding" element={<Bidding user={user} />} />

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/TestingComp" element={<TestingComp />} />
          <Route path="/ctesting" element={<Ctesting />} />

        </Routes>
      </div>
      <Footer />
      </AuthProvider>

    </Router>
  );
};

export default Main;
