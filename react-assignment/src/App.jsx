import React from "https://cdn.skypack.dev/react@18.2.0";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage.jsx";
import ShoppingCartPage from "./pages/CartPage.jsx";
import ProductListing from "./pages/ProductListing.jsx";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
