import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes, setUsers, setUsersLoading } from './actions';
import { getUsersRequest } from 'requests/users';
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

const users = function* () {
  yield takeLatest(actionTypes.GET_USERS, getUsers);
}

export default users;