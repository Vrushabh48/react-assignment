import React from "https://cdn.skypack.dev/react";
import { useSelector } from "https://cdn.skypack.dev/react-redux";

const Header = ({ navigate }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="bg-green-800 text-white p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold cursor-pointer" onClick={() => navigate("products")}>
        Houseplant Haven
      </h2>
      <nav>
        <button className="mr-4" onClick={() => navigate("products")}>Shop</button>
        <button onClick={() => navigate("cart")}>
          🛒 Cart ({totalQuantity})
        </button>
      </nav>
    </header>
  );
};

export default Header;
