import * as ActionType from './actionsType';
import { getUserLogout } from './userAction';

import { timeConverter } from '../javascript/time';

function openPopUp() {
  return {
    type: ActionType.TASK_POP_OPEN,
  };
}

function closePopUp() {
  return {
    type: ActionType.TASK_POP_CLOSE,
  };
}

function statusTask(json) {
  let status;
  if (json) {
    status = true;
  }
  return {
    type: ActionType.STATUS_TASK,
    payload: { active: status, current: json },
  };
}

function startTimer(time, category) {
  const timer = timeConverter(time);
  return (dispatch) => dispatch(
    {
      type: ActionType.UPDATE_TIME,
      payload: { timer, category },
    },
  );
}

function searchTask() {
  return (dispatch) => {
    dispatch({ type: ActionType.SEARCH_OPEN_TASKS });
    const token = sessionStorage.getItem('token');

    if (!token) {
      return dispatch(getUserLogout());
    }

    const url = 'https://dl-final.herokuapp.com/api/searcher';
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
    fetch(url, config)
      .then((response) => response.json())
      .then((json) => dispatch(statusTask(json)))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
    return null;
  };
}

export {
  searchTask, openPopUp, closePopUp, startTimer,
};
