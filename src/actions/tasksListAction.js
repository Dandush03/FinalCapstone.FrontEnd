import * as ActionType from './actionsType';
import { getUserLogout } from './userAction';

function getTasksSuccess(json) {
  return {
    type: ActionType.GET_TASKS_SUCCESS,
    payload: json,
  };
}

function getTasksFail() {
  return {
    type: ActionType.GET_TASKS_FAILD,
    payload: {},
  };
}

function getTask() {
  return (dispatch) => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      return dispatch(getUserLogout());
    }

    const url = '/api/tasks';
    const config = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    dispatch({ type: ActionType.SEARCH_OPEN_TASKS });
    fetch(url, config)
      .then((response) => response.json())
      .then((json) => dispatch(getTasksSuccess(json)))
      // eslint-disable-next-line no-console
      .catch(() => dispatch(getTasksFail()));
    return null;
  };
}

export default getTask;
