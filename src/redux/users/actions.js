export const actionTypes = {
  GET_USERS: 'GET_USERS',
  SET_USERS: 'SET_USERS',
  SET_USERS_LOADING: 'SET_USERS_LOADING',

  GET_USERS_RATING: 'GET_USERS_RATING',
  SET_USERS_RATING: 'SET_USERS_RATING',
  SET_USERS_RATING_LOADING: 'SET_USERS_RATING_LOADING',

  GET_USER: 'GET_USER',
  SET_USER: 'SET_USER',
  SET_USER_LOADING: 'SET_USER_LOADING',
  CLEAR_USER: 'CLEAR_USER',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

export const getUsers = payload => ({ 
  type: actionTypes.GET_USERS, 
  payload 
})


export const getUsersRating = payload => ({ 
  type: actionTypes.GET_USERS_RATING, 
  payload 
})


export const getUser = payload => ({
  type: actionTypes.GET_USER,
  payload
})

/********************************************
 ***************** TO REDUCER ***************
 *******************************************/

export const setUsers = payload => ({
  type: actionTypes.SET_USERS,
  payload
})

export const setUsersLoading = payload => ({
  type: actionTypes.SET_USERS_LOADING,
  payload
})


export const setUsersRating = payload => ({
  type: actionTypes.SET_USERS_RATING,
  payload
})

export const setUsersRatingLoading = payload => ({
  type: actionTypes.SET_USERS_RATING_LOADING,
  payload
})


export const setUser = payload => ({
  type: actionTypes.SET_USER,
  payload
})

export const setUserLoading = payload => ({
  type: actionTypes.SET_USER_LOADING,
  payload
})

export const clearUser = () => ({
  type: actionTypes.CLEAR_USER
})