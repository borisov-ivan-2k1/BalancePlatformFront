import { takeLeading, call, put } from 'redux-saga/effects';
import { actionTypes, setGroups, setGroupsLoading, clearAddGroup } from './actions';
import { getGroupsRequest, createGroupRequest } from 'requests/groups';
import { selectCreateGroupData } from './selectors';
import { toast } from 'react-toastify';


function* getGroups() {
  yield put(setGroupsLoading(true));
  try {
    const response = yield call(getGroupsRequest);
    if (response) {
      yield put(setGroups(response.data));
    } else {
      
    }
  } catch (e) {
    console.error('get groups errer', e)
  } finally {
    yield put(setGroupsLoading(false));
  }
}

function* createGroup() {
  try {
    const data = yield put(selectCreateGroupData);
    const requestData = {...data};
    delete data.open;
    const response = yield call(createGroupRequest, requestData);
    yield put(clearAddGroup());
    if (response) {
      toast.success('Группа создана');
    } else toast.error('Ошибка');
  } catch (e) {

  }
}

const groups = function* () {
  yield takeLeading(actionTypes.GET_GROUPS, getGroups);
  yield takeLeading(actionTypes.CREATE_GROUP, createGroup);
}

export default groups;