import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return { logged: true, user: action.payload };
    default:
      return state;
  }
};
