import React, { useState } from "https://cdn.skypack.dev/react";
import { useDispatch, useSelector } from "https://cdn.skypack.dev/react-redux";
import { addToCart } from "../redux/cartSlice.js";

const plants = [
  { id: "1", name: "Snake Plant", price: 20, category: "Low Light", image: "https://source.unsplash.com/160x160/?snakeplant" },
  { id: "2", name: "Peace Lily", price: 25, category: "Flowering", image: "https://source.unsplash.com/160x160/?peacelily" },
  { id: "3", name: "Fiddle Leaf Fig", price: 30, category: "Large", image: "https://source.unsplash.com/160x160/?fiddleleaffig" },
  { id: "4", name: "Spider Plant", price: 15, category: "Low Light", image: "https://source.unsplash.com/160x160/?spiderplant" },
  { id: "5", name: "Aloe Vera", price: 18, category: "Succulent", image: "https://source.unsplash.com/160x160/?aloevera" },
  { id: "6", name: "Pothos", price: 22, category: "Low Light", image: "https://source.unsplash.com/160x160/?pothos" },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [disabled, setDisabled] = useState({});

  const handleAdd = (plant) => {
    dispatch(addToCart({ id: plant.id, plant }));
    setDisabled({ ...disabled, [plant.id]: true });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Plants</h1>
      <div className="grid grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div key={plant.id} className="border p-4 rounded shadow-md text-center">
            <img src={plant.image} alt={plant.name} className="mx-auto mb-2" />
            <h2 className="text-xl font-semibold">{plant.name}</h2>
            <p>${plant.price}</p>
            <button
              disabled={!!cart[plant.id]}
              onClick={() => handleAdd(plant)}
              className={`mt-2 px-4 py-2 rounded text-white ${cart[plant.id] ? "bg-gray-400" : "bg-green-600 hover:bg-green-800"}`}
            >
              {cart[plant.id] ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
