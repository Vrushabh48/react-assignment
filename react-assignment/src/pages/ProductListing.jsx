import React, { useState } from "react";
import { Link } from 'react-router-dom';

const plantsData = [
  {
    id: 1,
    name: "Snake Plant",
    price: 18.99,
    category: "Air Purifiers",
    image: "https://via.placeholder.com/150?text=Snake+Plant",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 22.5,
    category: "Flowering Plants",
    image: "https://via.placeholder.com/150?text=Peace+Lily",
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: 15.0,
    category: "Low Maintenance",
    image: "https://via.placeholder.com/150?text=ZZ+Plant",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 12.75,
    category: "Air Purifiers",
    image: "https://via.placeholder.com/150?text=Aloe+Vera",
  },
  {
    id: 5,
    name: "Orchid",
    price: 25.0,
    category: "Flowering Plants",
    image: "https://via.placeholder.com/150?text=Orchid",
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 14.99,
    category: "Low Maintenance",
    image: "https://via.placeholder.com/150?text=Spider+Plant",
  },
];

const ProductListingPage = () => {
  const [cart, setCart] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState({});

  const addToCart = (plant) => {
    setCart((prev) => [...prev, plant]);
    setDisabledButtons((prev) => ({ ...prev, [plant.id]: true }));
  };

  const categories = [...new Set(plantsData.map((plant) => plant.category))];

  return (
    <div style={{ padding: "2rem" }}>
      <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#544343",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div>
        <Link to="/cart" style={{ marginRight: "1.5rem", fontWeight: "bold", textDecoration: "none", color: "#000000" }}>
          🪴 Shop Plants
        </Link>
        <div style={{ textAlign: "right", fontSize: "1.2rem", marginBottom: "1rem" }}>
        🛒 Cart: {cart.length}
      </div>
      </div>
      <h2 style={{ margin: 0 }}>GreenLeaf Houseplants</h2>
    </header>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Shop Houseplants</h1>

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <h2>{category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {plantsData
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "1rem",
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  <img src={plant.image} alt={plant.name} style={{ width: "100%" }} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(plant)}
                    disabled={disabledButtons[plant.id]}
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: disabledButtons[plant.id] ? "#ccc" : "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: disabledButtons[plant.id] ? "not-allowed" : "pointer",
                    }}
                  >
                    {disabledButtons[plant.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
