export const actionTypes = {
  GET_BADGES: 'GET_BADGES',
  SET_BADGES: 'SET_BADGES',
  SET_BADGES_LOADING: 'SET_BADGES_LOADING',
  CLEAR_BADGES: 'CLEAR_BADGES',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

export const getBadges = payload => ({ 
  type: actionTypes.GET_BADGES, 
  payload 
})

/********************************************
 ***************** TO REDUCER ***************
 *******************************************/

export const setBadges = payload => ({
  type: actionTypes.SET_BADGES,
  payload
})

export const setBadgesLoading = payload => ({
  type: actionTypes.SET_BADGES_LOADING,
  payload
})

export const clearBadges = () => ({
  type: actionTypes.CLEAR_BADGES
})