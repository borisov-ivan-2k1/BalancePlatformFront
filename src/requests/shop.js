import axios from './axios';

export const getShopRequest = () => axios.get(`/shop/products`);
export const orderProductRequest = data => axios.post('/shop/order', data);