import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import shop from './shop/saga';
import groups from './groups/saga';
import users from './users/saga';
import badges from './badges/saga';

function* rootSaga() {
  yield all([
    auth(),
    shop(),
    groups(),
    users(),
    badges(),
  ])
}

export default rootSaga;