import { setCoolie, setLocalStorage, removeCookie, removeLocalStorage } from 'utils';

// auth user after login
export const authenticate = (response, cb) => {
  window.axios.defaults.headers.common['token'] = response.data.token;
  setCoolie('token', response.data.token);
  setLocalStorage('user', response.data.user);
  if (cb) cb();
}

export const logout = () => {
  removeCookie('token');
  removeLocalStorage('user');
}
