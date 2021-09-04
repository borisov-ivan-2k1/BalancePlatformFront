export const actionTypes = {
  GET_GROUPS: 'GET_GROUPS',
  SET_GROUPS: 'GROUPS',
  SET_GROUPS_LOADING: 'SET_GROUPS_LOADING',
  CREATE_GROUP: 'CREATE_GROUP',
  CHNAGE_CREATE_GROUP: 'CHNAGE_CREATE_GROUP',
  CLEAR_CREATE_GROUP: 'CLEAR_CREATE_GROUP',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

export const getGroups = payload => ({ 
  type: actionTypes.GET_GROUPS, 
  payload 
})

export const createGroup = payload => ({
  type: actionTypes.CREATE_GROUP,
  payload
})

/********************************************
 ***************** TO REDUCER ***************
 *******************************************/

export const setGroups = payload => ({
  type: actionTypes.SET_GROUPS,
  payload
})

export const setGroupsLoading = payload => ({
  type: actionTypes.SET_GROUPS_LOADING,
  payload
})

export const changeAddGroup = payload => ({
  type: actionTypes.CHNAGE_CREATE_GROUP,
  payload
})

export const clearAddGroup = () => ({
  type: actionTypes.CLEAR_CREATE_GROUP,
})