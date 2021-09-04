import { takeLeading, call, put, select } from 'redux-saga/effects';
import { actionTypes, changeLoginData, setAuth } from './actions';
import { selectLoginData } from './selectors';
import { loginRequest } from 'requests/auth';
import { authenticate, logout } from 'utils/helpers/auth';
import { getCookie, getLocalStorage } from 'utils';
import { toast } from 'react-toastify';


function* initUserSaga() {
  try {
    const token = getCookie('token')
    const user = getLocalStorage('user');

    if (token && user) {
      yield put(setAuth({ token, user: { ...user, isAdmin: true }, isAuth: true }));
    } else {
      yield put(setAuth({ isAuth: false }));
    }

  } catch (e) {
    console.error('init user error', e);
  }
}

function* loginSaga() {
  try {
    const { login, password } = yield select(selectLoginData);
    console.log(' login, password ',  login, password )
    if (login && password) {
      const res = yield call(loginRequest, { login, password });
      if (res) {
        console.log(res.data)
        yield call(authenticate, res);
        const user = res.data.user
        yield put(setAuth({ token: res.data.token, user: { ...user, isAdmin: true }, isAuth: true }));
        console.log(res.data.token)
      }
      else {
        yield put(changeLoginData({ password: '' }));
        toast.error(res.err);
      }
    } else {
      toast.error('Заполните все поля');
    }
  } catch (e) {
    console.error('login error', e);
  }
}

function* logoutSaga() {
  try {
    yield call(logout);
    yield put(setAuth({ token: '', user: null, isAuth: false }));
  } catch (e) {
    console.error('logout error', e);
  }
}

const auth = function* () {
  yield takeLeading(actionTypes.INIT_USER, initUserSaga);
  yield takeLeading(actionTypes.LOGIN, loginSaga);
  yield takeLeading(actionTypes.LOGOUT, logoutSaga)
}

export default auth;
