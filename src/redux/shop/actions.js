export const actionTypes = {
  GET_SHOP_PRODUCTS: 'GET_SHOP_PRODUCTS',
  SET_SHOP_PRODUCTS: 'SET_SHOP_PRODUCTS',
  SET_SHOP_LOADING: 'SET_SHOP_LOADING',
  ORDER_PRODUCT: 'ORDER_PRODUCT',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

export const getShopProducts = payload => ({ 
  type: actionTypes.GET_SHOP_PRODUCTS, 
  payload 
})

export const orderProduct = payload => ({
  type: actionTypes.ORDER_PRODUCT,
  payload
})

/********************************************
 ***************** TO REDUCER ***************
 *******************************************/

export const setShopProducts = payload => ({
  type: actionTypes.SET_SHOP_PRODUCTS,
  payload
})

export const setShopLoading = payload => ({
  type: actionTypes.SET_SHOP_LOADING,
  payload
})