export const actionTypes = {
  LOGIN: 'LOGIN',
  SET_AUTH: 'SET_AUTH',
  INIT_USER: 'INIT_USER',
  SET_LOGIN_DATA: 'SET_LOGIN_DATA',
  CHANGE_LOGIN_DATA: 'CHANGE_LOGIN_DATA',
  CLEAR_LOGIN_DATA: 'CLEAR_LOGIN_DATA',
  LOGOUT: 'LOGOUT',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

export const login = () => ({
  type: actionTypes.LOGIN,
})

export const initUser = payload => ({
  type: actionTypes.INIT_USER,
  payload
})

export const logout = () => ({
  type: actionTypes.LOGOUT
})

/********************************************
 ***************** TO REDUCER ***************
 *******************************************/

export const setLoginData = payload => ({
  type: actionTypes.SET_LOGIN_DATA,
  payload
})

export const changeLoginData = payload => ({
  type: actionTypes.CHANGE_LOGIN_DATA,
  payload
})

export const clearLoginData = () => ({
  type: actionTypes.CLEAR_LOGIN_DATA,
})

/**
 * @param {user, token, isAuth} payload 
 */
export const setAuth = payload => ({
  type: actionTypes.SET_AUTH,
  payload
})