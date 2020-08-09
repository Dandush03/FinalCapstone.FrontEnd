import * as ActionTypes from './actionsType';

const getUserSuccessfully = () => ({
  type: ActionTypes.USER_LOGIN,
});

const getUserFail = (json) => ({
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
    const url = '/api/auth/login';
    const config = {
      method: 'POST',
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
          return dispatch(getUserSuccessfully());
        }
        return (dispatch(ErrMsg(json.message)));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };
};

const getStatus = (token) => (dispatch) => {
  const url = '/api/auth';
  const config = {
    method: 'GET',
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
      return (dispatch(getUserFail()));
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
};

export {
  loginUser, getStatus, ErrMsg, ErrClear,
};
