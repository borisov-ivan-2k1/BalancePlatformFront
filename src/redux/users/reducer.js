import { actionTypes } from './actions';

const baseState = {
  loading: false,
  users: [],
  ratingLoading: false,
  usersRating: [],
  userLoading: false,
  user: undefined,
}

export const usersReducer = (state = baseState, action) => {
  switch (action.type) {

    case actionTypes.SET_USERS: {
      return {
        ...state,
        users: action.payload
      }
    }

    case actionTypes.SET_USERS_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }

    case actionTypes.SET_USERS_RATING: {
      return {
        ...state,
        usersRating: action.payload
      }
    }

    case actionTypes.SET_USERS_RATING_LOADING: {
      return {
        ...state,
        ratingLoading: action.payload
      }
    }

    case actionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload
      }
    }

    case actionTypes.SET_USER_LOADING: {
      return {
        ...state,
        userLoading: action.payload,
      }
    }

    case actionTypes.CLEAR_USER: {
      return {
        ...state,
        user: baseState.user,
        userLoading: baseState.userLoading
      }
    }

    default: {
      return state
    }
  }
}