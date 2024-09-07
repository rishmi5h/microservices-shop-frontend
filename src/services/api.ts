import axios from 'axios';

const API_URL = 'https://your-backend-api.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = () => api.get('/products');
export const getProduct = (id: string) => api.get(`/products/${id}`);
export const addToCart = (productId: string, quantity: number) =>
  api.post('/cart', { productId, quantity });
export const getCart = () => api.get('/cart');
export const addToWishlist = (productId: string) =>
  api.post('/wishlist', { productId });
export const getWishlist = () => api.get('/wishlist');
export const placeOrder = (orderData: any) => api.post('/orders', orderData);
export const getOrders = () => api.get('/orders');

export default api;
