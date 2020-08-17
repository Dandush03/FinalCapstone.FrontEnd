import * as ActionTypes from './actionsType';

function geDataSuccess(json) {
  return {
    type: ActionTypes.GET_TASK_BY_SUCCESS,
    payload: json,
  };
}

function geDataFail() {
  return {
    type: ActionTypes.GET_TASK_BY_FAIL,
    payload: {
      working: [], studing: [], eating: [], sleeping: [],
    },
  };
}

// eslint-disable-next-line camelcase

function loadProgressData(range) {
  const token = sessionStorage.getItem('token');
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
  const url = 'https://dl-final.herokuapp.com/api/searcher/by_category_date';
  return (dispatch) => {
    dispatch({ type: ActionTypes.GET_TASK_BY });
    Promise.all([
      fetch(`${url}?range=${range}&category_id=1`, config),
      fetch(`${url}?range=${range}&category_id=2`, config),
      fetch(`${url}?range=${range}&category_id=3`, config),
      fetch(`${url}?range=${range}&category_id=4`, config),
    ])
      .then(async ([w, s, e, sl]) => {
        const working = await w.json();
        const studing = await s.json();
        const eating = await e.json();
        const sleeping = await sl.json();
        return [working, studing, eating, sleeping];
      })
      .then(async ([w, s, e, sl]) => {
        const working = await w;
        const studing = await s;
        const eating = await e;
        const sleeping = await sl;
        return dispatch(geDataSuccess({
          working, studing, eating, sleeping,
        }));
      })
      .catch(() => dispatch(geDataFail()));
  };
}

export default loadProgressData;
