import { takeLeading, call, put } from 'redux-saga/effects';
import { actionTypes, setBadges, setBadgesLoading } from './actions';
import { getBadgesRequest } from 'requests/badges';


function* getBadges(action) {
  yield put(setBadgesLoading(true));
  try {
    const response = yield call(getBadgesRequest, action.payload);
    if (response) {
      yield put(setBadges(response.data));
    } else {
      
    }
  } catch (e) {
    console.error('get badges errer', e)
  } finally {
    yield put(setBadgesLoading(false));
  }
}

const badges = function* () {
  yield takeLeading(actionTypes.GET_BADGES, getBadges);
}

export default badges;