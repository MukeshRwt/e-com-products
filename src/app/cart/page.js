"use client";

import Link from "next/link";
import { useCartStore } from "../store/cart/cartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="h-screen flex flex-col gap-6 justify-center items-center text-xl font-semibold">
        <p> 🛒 Your cart is empty.</p>
        <div className="text-blue-500 underline">
          <Link href={"/"}>return to home page</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between">
        {" "}
        <h1 className="text-3xl font-bold mb-6">🛍️ Your Cart</h1>
        <Link className="text-blue-500" href={"/"}>
          Home page
        </Link>
      </div>

      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex gap-4 items-center">
            <img src={item.image} alt={item.title} className="h-16 w-16" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">
                ${item.price} × {item.quantity}
              </p>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline">
            Remove
          </button>
        </div>
      ))}

      <div className="mt-8 flex justify-between items-center">
        <div>
          <p className="text-lg font-medium">
            Total Items: <span className="font-bold">{totalItems}</span>
          </p>
          <p className="text-lg font-medium">
            Total Price: <span className="font-bold text-green-700">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
