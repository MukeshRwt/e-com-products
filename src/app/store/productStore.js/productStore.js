import { create } from "zustand";

export const useProductStore = create((set) => ({
  search: "",
  category: "all",
  setSearch: (s) => set({ search: s }),
  setCategory: (c) => set({ category: c }),
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));
