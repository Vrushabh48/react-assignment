import React, { useState } from "https://cdn.skypack.dev/react";
import LandingPage from "./pages/LandingPage.js";
import ProductListing from "./pages/ProductListing.js";
import CartPage from "./pages/CartPage.js";
import Header from "./components/Header.js";

const App = () => {
  const [page, setPage] = useState("landing");

  const navigate = (target) => setPage(target);

  return (
    <>
      {page !== "landing" && <Header navigate={navigate} />}
      {page === "landing" && <LandingPage navigate={navigate} />}
      {page === "products" && <ProductListing navigate={navigate} />}
      {page === "cart" && <CartPage navigate={navigate} />}
    </>
  );
};

export default App;
