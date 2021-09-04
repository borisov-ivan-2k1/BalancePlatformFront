import axios from './axios';

export const loginRequest = (userData) => axios.post(`/Auth/Login`, userData);
