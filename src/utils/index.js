import cookie from 'js-cookie';

export const setCoolie = (key, value) => {
  if (window !== 'undefined') {
    cookie.set(key, value, {
      expires: 183
    })
  }
}

export const removeCookie = key => {
  if (window !== 'undefined') {
    cookie.remove(key, {
      expires: 183
    })
  }
}

export const getCookie = key => {
  if (window !== 'undefined') {
    return cookie.get(key);
  }
}

export const setLocalStorage = (key, value) => {
  if (window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const removeLocalStorage = key => {
  if (window !== 'undefined') {
    localStorage.removeItem(key);
  }
}

export const getLocalStorage = key => {
  if (window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key));
  }
}

export const formatPhone = phone => {
  const data = phone.split('');
  if (data[0] !== '+') data.unshift('+');
  data.splice(2,"", "(");
  data.splice(6,"", ")");
  data.splice(10,"", "-");
  data.splice(13,"", "-");
  return data;
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();

  return dd + '.' + mm + '.' + yy;
}