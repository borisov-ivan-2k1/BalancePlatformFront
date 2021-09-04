import axios from 'axios';
import { logout } from 'utils/helpers/auth';
import { getCookie } from 'utils';


axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common = {'Authorization': `Bearer ${getCookie('token')}`};

axios.interceptors.response.use((response) => {
  return response;
}, function (error) {
  if (error.response?.status === 401) {
    logout();
    window.location.reload();
  }
  return Promise.reject(error.response);
});

window.axios = axios;

export default axios;
