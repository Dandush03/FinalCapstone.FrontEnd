import { combineReducers } from 'redux';

import LoadingReducers from './loadingReducers';

export default combineReducers({
  loadingItems: LoadingReducers,
});
