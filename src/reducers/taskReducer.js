import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.OPEN_TASK:
      return { taskPop: state.taskPop, ...action.payload };
    case types.STATUS_TASK:
      return { taskPop: state.taskPop, ...action.payload };
    case types.CLOSE_TASK:
      return { active: false, current: {}, staskPop: false };
    case types.TASK_POP_OPEN:
      return { ...state, taskPop: true };
    case types.TASK_POP_CLOSE:
      return { ...state, taskPop: false };
    default:
      return state;
  }
};
