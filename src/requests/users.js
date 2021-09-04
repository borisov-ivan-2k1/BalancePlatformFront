import axios from './axios';

export const getUsersRequest = () => axios.get(`/Users/List`);
export const getUsersRatingRequest = () => axios.get(`/Users/Rating`);
export const getUserRequest = (id) => axios.get('/Users/User', { params: { id } });