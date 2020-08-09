import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return true;
    case types.USER_LOGOUT:
      return false;
    default:
      return state;
  }
};
