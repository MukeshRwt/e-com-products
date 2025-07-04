import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const exists = get().cart.find((item) => item.id === product.id);
    if (!exists) {
      set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] }));
    } else {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }));
    }
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => set({ cart: [] }),
}));
