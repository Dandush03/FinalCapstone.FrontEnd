import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.ADD_LOADING_ITEM:
      return state + 1;
    case types.REMOVE_LOADING_ITEM:
      return state - 1;
    default:
      return state;
  }
};
