import { actionTypes } from './actions';

const baseState = {
  loading: false,
  badges: [],
}

export const badgesReducer = (state = baseState, action) => {
  switch (action.type) {

    case actionTypes.SET_BADGES: {
      return {
        ...state,
        badges: action.payload
      }
    }

    case actionTypes.SET_BADGES_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }

    case actionTypes.CLEAR_BADGES: {
      return {
        ...state,
        badges: baseState.badges
      }
    }
  
    default: {
      return state
    }
  }
}