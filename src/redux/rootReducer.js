import { combineReducers } from 'redux';

import { authReducer as auth } from './auth/reducer';
import { shopReducer as shop } from './shop/reducer';
import { groupsReducer as groups } from './groups/reducer';
import { usersReducer as users } from './users/reducer';
import { badgesReducer as badges } from './badges/reducer';

export const rootReducer = combineReducers({
  auth,
  shop,
  groups,
  users,
  badges
});