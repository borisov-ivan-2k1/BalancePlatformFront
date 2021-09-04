import { actionTypes } from './actions';

const baseState = {
  loading: false,
  groups: [],
  createGroup: {
    open: false,
    title: '',
    description: '',
    imgUrl: '',
  },
  group: {}
}

export const groupsReducer = (state = baseState, action) => {
  switch (action.type) {

    case actionTypes.SET_GROUPS: {
      return {
        ...state,
        groups: action.payload
      }
    }

    case actionTypes.SET_GROUPS_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }

    case actionTypes.CHNAGE_CREATE_GROUP: {
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          ...action.payload
        }
      }
    }

    case actionTypes.CLEAR_CREATE_GROUP: {
      return {
        ...state,
        createGroup: baseState.createGroup
      }
    }
  
    default: {
      return state
    }
  }
}