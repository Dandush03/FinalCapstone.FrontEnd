import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.GET_TASK_BY_SUCCESS:
      return action.payload;
    case types.GET_TASK_BY_FAIL:
      return action.payload;
    default:
      return state;
  }
};
