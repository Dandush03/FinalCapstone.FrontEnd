import { combineReducers } from 'redux';

import LoadingReducer from './loadingReducer';
import UserReducer from './userReducer';
import ErrorMessagesReducer from './errorMessagesReducer';

export default combineReducers({
  loadingItems: LoadingReducer,
  logged: UserReducer,
  errorMessages: ErrorMessagesReducer,
});
