import { actionTypes } from './actions';
import { getCookie } from 'utils';

const baseState = {
  login: {
    login: '',
    password: '',
    open: false,
  },
  user: null,
  token: getCookie('token'),
  isAuth: !!getCookie('token')
}

export const authReducer = (state = baseState, action) => {
  switch (action.type) {

    case actionTypes.CHANGE_LOGIN_DATA: {
      return {
        ...state,
        login: {
          ...state.login,
          ...action.payload
        }
      }
    }

    case actionTypes.CLEAR_LOGIN_DATA: {
      return {
        ...state,
        login: baseState.login
      }
    }

    case actionTypes.SET_AUTH: {
      if (action.payload.auth) delete action.payload.auth;
      return {
        ...state,
        ...action.payload
      }
    }
  
    default: {
      return state
    }
  }
}