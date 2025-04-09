import React from "https://cdn.skypack.dev/react";
import { useSelector, useDispatch } from "https://cdn.skypack.dev/react-redux";
import { increaseItem, decreaseItem, removeItem } from "../redux/cartSlice.js";

const CartPage = ({ navigate }) => {
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <p>Total items: {totalQuantity}</p>
      <p>Total cost: ${totalPrice.toFixed(2)}</p>

      {Object.values(cart).map((item) => (
        <div key={item.id} className="flex items-center justify-between border p-4 my-2">
          <img src={item.image} className="w-16 h-16" />
          <div>{item.name}</div>
          <div>${item.price}</div>
          <div className="flex items-center">
            <button onClick={() => dispatch(decreaseItem(item.id))} className="mx-1 px-2 py-1 bg-yellow-400 rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseItem(item.id))} className="mx-1 px-2 py-1 bg-green-400 rounded">+</button>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
      ))}

      <div className="mt-6">
        <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => navigate("products")}>
          Continue Shopping
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => alert("Coming Soon!")}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
