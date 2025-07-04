import { useProductStore } from "@/app/store/productStore.js/productStore";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct } = useProductStore();

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition cursor-pointer"
          onClick={() => setSelectedProduct(null)}
        >
          <FontAwesomeIcon icon={faXmark} className="text-2xl" />
        </button>

        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="h-48 mx-auto object-contain"
        />

        <h2 className="text-2xl font-semibold mt-4 text-center text-gray-800">
          {selectedProduct.title}
        </h2>

        <p className="mt-3 text-sm text-gray-600 text-center">{selectedProduct.description}</p>

        <p className="mt-4 text-lg font-bold text-green-600 text-center">
          ${selectedProduct.price}
        </p>
      </div>
    </div>
  );
}
