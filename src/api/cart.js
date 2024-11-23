// src/api/cart.js
import api from './axiosInstance';

export const fetchCart = () => api.get('/cart');
export const addToCart = (item) => api.post('/cart', item);
export const updateCartItem = (itemId, quantity) => api.put(`/cart/${itemId}`, { quantity });
export const deleteCartItem = (itemId) => api.delete(`/cart/${itemId}`);
