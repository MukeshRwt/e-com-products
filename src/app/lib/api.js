import axios from "axios";

const API_BASE = "https://fakestoreapi.com";
export const getAllProducts = () => axios.get(`${API_BASE}/products`);
export const getCategories = () => axios.get(`${API_BASE}/products/categories`);
export const getProductById = (id) => axios.get(`${API_BASE}/products/${id}`);
export const getProductsByCategory = (cat) => axios.get(`${API_BASE}/products/category/${cat}`);
