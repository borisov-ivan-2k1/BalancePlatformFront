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

    default: {
      return state
    }
  }
}