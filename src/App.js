import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProductPage,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:id" element={<SingleProductPage />}></Route>
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
