"use client";
import Navbar from "./components/navbar/Navbar";
import ProductCard from "./components/products/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getCategories } from "./lib/api";
import { useProductStore } from "./store/productStore.js/productStore";
import ProductModal from "./components/products/ProductModal";
import Loading from "./utils/Loading";
import Error from "./utils/Error";

export default function Home() {
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProducts,
  });
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
  const search = useProductStore((s) => s.search);
  const category = useProductStore((s) => s.category);
  const setCategory = useProductStore((s) => s.setCategory);
  const setSearch = useProductStore((s) => s.setSearch);

  const products = productsData?.data || [];
  const categories = categoryData?.data || [];

  const filteredProduct = products.filter((p) => {
    return (
      (category === "all" || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (productsLoading || categoryLoading) return <Loading />;
  if (productsError || categoryError) return <Error message="Failed to load products." />;

  return (
    <main className="">
      <Navbar />
      <div className="flex gap-4 mb-6 mt-10 px-12">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border px-4 py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-10 px-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4 sm:w-full">
        {filteredProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ProductModal />
    </main>
  );
}
