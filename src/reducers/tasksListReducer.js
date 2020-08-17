import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.GET_TASKS_SUCCESS:
      return action.payload;
    case types.GET_TASKS_FAILD:
      return action.payload;
    default:
      return state;
  }
};
