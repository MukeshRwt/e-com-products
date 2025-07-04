"use client";

import { useCartStore } from "@/app/store/cart/cartStore";
import { useProductStore } from "@/app/store/productStore.js/productStore";

const ProductCard = ({ product }) => {
  const setSelectedProduct = useProductStore((s) => s.setSelectedProduct);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border-2 border-neutral-200 w-[17rem] bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
      {/* ✅ Only this part opens the modal */}
      <div onClick={() => setSelectedProduct(product)} className="flex flex-col cursor-pointer">
        <img
          className="w-full h-56 object-contain p-4 rounded-t-xl"
          src={product.image}
          alt={product.title}
        />

        <div className="flex flex-col items-center gap-2 px-4 pb-2">
          <h3 className="font-semibold text-base text-center line-clamp-1">{product.title}</h3>
          <p className="text-sm text-gray-600 text-center line-clamp-3">{product.description}</p>
        </div>
      </div>

      {/* ✅ This part is separated, won't trigger modal */}
      <div className="flex justify-between items-center px-4 pb-4 mt-3">
        <p className="text-lg font-semibold text-green-700">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="text-xs bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
