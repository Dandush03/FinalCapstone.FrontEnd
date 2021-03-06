import * as ActionTypes from './actionsType';

const getUserSuccessfully = () => ({
  type: ActionTypes.USER_LOGIN,
});

const getUserLogout = (json) => ({
  type: ActionTypes.USER_LOGOUT,
  payload: json,
});

const ErrMsg = (err) => ({
  type: ActionTypes.ERRORS_MESSAGES,
  payload: err,
});

const ErrClear = () => ({
  type: ActionTypes.ERRORS_CLEAR,
});

const loginUser = (data) => {
  const userData = data;
  return (dispatch) => {
    const url = 'https://dl-final.herokuapp.com/api/auth/login';
    const config = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    fetch(url, config)
      .then((response) => response.json())
      .then((json) => {
        if (json.auth_token) {
          const token = json.auth_token;
          sessionStorage.setItem('token', token);
          dispatch(ErrClear());
          return dispatch(getUserSuccessfully());
        }
        return (dispatch(ErrMsg(json.message)));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };
};

const registrateUser = (data) => {
  const userData = data;
  return (dispatch) => {
    const url = 'https://dl-final.herokuapp.com/api/auth/signup';
    const config = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    fetch(url, config)
      .then((response) => response.json())
      .then((json) => {
        if (json.auth_token) {
          const token = json.auth_token;
          sessionStorage.setItem('token', token);
          dispatch(ErrClear());
          return dispatch(getUserSuccessfully());
        }
        return (dispatch(ErrMsg(json.message)));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };
};

const getStatus = (token) => (dispatch) => {
  const url = 'https://dl-final.herokuapp.com/api/auth';
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
    .then((response) => {
      if (response.status === 200) {
        return (dispatch(getUserSuccessfully()));
      }
      sessionStorage.removeItem('token');
      return (dispatch(getUserLogout()));
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
};

export {
  loginUser, getStatus, ErrMsg, ErrClear, getUserLogout, registrateUser,
};
