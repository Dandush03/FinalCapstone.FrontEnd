import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.SAMPLE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
