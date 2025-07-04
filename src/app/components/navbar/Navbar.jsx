import { useCartStore } from "@/app/store/cart/cartStore";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="flex justify-between items-center px-12 py-4 shadow-md bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 text-white">
      <h1 className="text-2xl font-bold"> E-Com Product</h1>

      <div className="flex  gap-12  items-center">
        <Link href={"/cart"} className="">
          {" "}
          <div className="relative">
            {" "}
            <FontAwesomeIcon icon={faCartShopping} className="w-6" />
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full ">
                {count}
              </span>
            )}
          </div>
        </Link>

        <Link href="/add-product" className="px-8 border-2 border-white py-1 rounded-full ">
          Add Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
