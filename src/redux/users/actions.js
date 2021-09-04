export const actionTypes = {
  GET_USERS: 'GET_USERS',
  SET_USERS: 'SET_USERS',
  SET_USERS_LOADING: 'SET_USERS_LOADING',

}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

export const getUsers = payload => ({ 
  type: actionTypes.GET_USERS, 
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
