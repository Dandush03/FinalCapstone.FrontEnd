import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.UPDATE_TIME:
      return action.payload;
    default:
      return state;
  }
};
