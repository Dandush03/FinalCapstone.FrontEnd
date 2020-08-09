import { combineReducers } from 'redux';

import LoadingReducer from './loadingReducer';
import UserReducer from './userReducer';
import ErrorMessagesReducer from './errorMessagesReducer';
import TaskReducer from './taskReducer';
import Timer from './timerReducer';
import tasksListReducer from './tasksListReducer';

export default combineReducers({
  loadingItems: LoadingReducer,
  logged: UserReducer,
  errorMessages: ErrorMessagesReducer,
  task: TaskReducer,
  timer: Timer,
  taskList: tasksListReducer,
});
