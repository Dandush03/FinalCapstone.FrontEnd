import * as ActionTypes from './actionsType';

function addItem() {
  return {
    type: ActionTypes.ADD_LOADING_ITEM,
  };
}

function removeItem() {
  return {
    type: ActionTypes.REMOVE_LOADING_ITEM,
  };
}

export { addItem, removeItem };
