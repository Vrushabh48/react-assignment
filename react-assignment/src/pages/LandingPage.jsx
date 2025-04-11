import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/products"); // Assuming "/products" is your product listing route
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://your-image-url.com/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>GreenLeaf Houseplants</h1>
      <p style={{ maxWidth: "600px", fontSize: "1.25rem", marginBottom: "2rem" }}>
        At GreenLeaf, we bring nature to your doorstep. Discover vibrant and healthy houseplants
        that refresh your space and purify your air. Grown with love, delivered with care.
      </p>
      <button
        onClick={handleGetStarted}
        style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
