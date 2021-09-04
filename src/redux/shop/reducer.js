import { actionTypes } from './actions';

const baseState = {
  loading: false,
  products: [],
}

export const shopReducer = (state = baseState, action) => {
  switch (action.type) {

    case actionTypes.SET_SHOP_PRODUCTS: {
      return {
        ...state,
        products: action.payload
      }
    }

    case actionTypes.SET_SHOP_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
  
    default: {
      return state
    }
  }
}