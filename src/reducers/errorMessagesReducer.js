import * as types from '../actions/actionsType';

export default (_state = null, action) => {
  switch (action.type) {
    case types.ERRORS_MESSAGES:
      return action.payload;
    case types.ERRORS_CLEAR:
      return null;
    default:
      return _state;
  }
};
