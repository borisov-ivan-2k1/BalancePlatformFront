import { takeLeading, call, put } from 'redux-saga/effects';
import { actionTypes, setShopLoading, setShopProducts } from './actions';
import { getShopRequest, orderProductRequest } from 'requests/shop';
import { toast } from 'react-toastify';


function* getShopProducts(action) {
  yield put(setShopLoading(true));
  try {
    const response = yield call(getShopRequest);
    if (response) {
      yield put(setShopProducts(response.data));
    } else {
      
    }
  } catch (e) {
    console.error('getshop products errer', e)
  } finally {
    yield put(setShopLoading(false));
  }
}

function* orderProduct(action) {
  try {
    const data = action.payload;
    const response = yield call(orderProductRequest, data);
    if (response) {
      toast.success('Заказ оформлен');
    } else toast.error('Ошибка');
  } catch (e) {

  }
}

const shop = function* () {
  yield takeLeading(actionTypes.GET_SHOP_PRODUCTS, getShopProducts);
  yield takeLeading(actionTypes.ORDER_PRODUCT, orderProduct);
}

export default shop;