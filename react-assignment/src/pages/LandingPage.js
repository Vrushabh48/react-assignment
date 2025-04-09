import React from "https://cdn.skypack.dev/react";

const LandingPage = ({ navigate }) => (
  <div className="h-screen bg-[url('https://source.unsplash.com/featured/?plants')] bg-cover flex flex-col justify-center items-center text-white text-center">
    <h1 className="text-5xl font-bold mb-6 bg-black bg-opacity-50 p-4 rounded">Houseplant Haven</h1>
    <p className="max-w-xl mb-6 bg-black bg-opacity-50 p-4 rounded">
      We bring the green indoors. Discover healthy, vibrant houseplants that transform your space and purify your air.
    </p>
    <button
      className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded"
      onClick={() => navigate("products")}
    >
      Get Started
    </button>
  </div>
);

export default LandingPage;
