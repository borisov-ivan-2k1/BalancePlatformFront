import { takeLatest, takeLeading, call, put } from 'redux-saga/effects';
import { 
  actionTypes, setUsers, setUsersLoading, 
  setUsersRating, setUsersRatingLoading,
  setUser, setUserLoading
} from './actions';
import { getUsersRequest, getUsersRatingRequest, getUserRequest } from 'requests/users';
// import { toast } from 'react-toastify';


function* getUsers() {
  yield put(setUsersLoading(true));
  try {
    const response = yield call(getUsersRequest);
    if (response) {
      yield put(setUsers(response.data));
    } else {
      
    }
  } catch (e) {
    console.error('get users errer', e)
  } finally {
    yield put(setUsersLoading(false));
  }
}

function* getUsersRating() {
  yield put(setUsersRatingLoading(true));
  try {
    const response = yield call(getUsersRatingRequest);
    if (response) {
      yield put(setUsersRating(response.data));
    } else {
      
    }
  } catch (e) {
    console.error('get users rating errer', e)
  } finally {
    yield put(setUsersRatingLoading(false));
  }
}

function* getUser(action) {
  yield put(setUserLoading(true));
  try {
    const response = yield call(getUserRequest, action.payload);
    if (response) {
      yield put(setUser(response.data));
    } else {
      
    }
  } catch (e) {
    console.error('get user errer', e)
  } finally {
    yield put(setUserLoading(false));
  }
}

const users = function* () {
  yield takeLatest(actionTypes.GET_USERS, getUsers);
  yield takeLatest(actionTypes.GET_USERS_RATING, getUsersRating);
  yield takeLeading(actionTypes.GET_USER, getUser);
}

export default users;