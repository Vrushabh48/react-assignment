import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const initialCart = [
  {
    id: 1,
    name: "Snake Plant",
    price: 18.99,
    quantity: 1,
    image: "https://via.placeholder.com/150?text=Snake+Plant",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 22.5,
    quantity: 2,
    image: "https://via.placeholder.com/150?text=Peace+Lily",
  },
];

const ShoppingCartPage = () => {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Checkout feature coming soon!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#f8f8f8",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div>
        <Link to="/products" style={{ marginRight: "1.5rem", fontWeight: "bold", textDecoration: "none", color: "#333" }}>
          🪴 Shop Plants
        </Link>
        <Link to="/cart" style={{ fontWeight: "bold", textDecoration: "none", color: "#333" }}>
          🛒 Cart ({totalItems})
        </Link>
        <button onClick={navigate('/products')}>Product List Page</button>
      </div>
      <h2 style={{ margin: 0 }}>GreenLeaf Houseplants</h2>
    </header>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <img src={item.image} alt={item.name} width="100" />
            <div style={{ flexGrow: 1 }}>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <button onClick={() => increaseQuantity(item.id)}>➕ Increase</button>
              <button onClick={() => decreaseQuantity(item.id)}>➖ Decrease</button>
              <button onClick={() => deleteItem(item.id)} style={{ color: "red" }}>
                🗑️ Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <button
          onClick={handleCheckout}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
        <button
          onClick={() => navigate("/products")}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
