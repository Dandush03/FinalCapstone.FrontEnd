import { combineReducers } from 'redux';

import LoadingReducer from './loadingReducer';
import UserReducer from './userReducer';
import ErrorMessagesReducer from './errorMessagesReducer';
import TaskReducer from './task';
import Timer from './timer';

export default combineReducers({
  loadingItems: LoadingReducer,
  logged: UserReducer,
  errorMessages: ErrorMessagesReducer,
  task: TaskReducer,
  timer: Timer,
});
