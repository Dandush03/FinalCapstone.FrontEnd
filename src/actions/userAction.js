import * as ActionTypes from './actionsType';

const getUserSuccessfully = (json) => ({
  type: ActionTypes.USER_LOGIN,
  payload: json,
});

const getUserFail = (json) => ({
  type: ActionTypes.USER_LOGIN,
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
  const userData = { user: data };
  return (dispatch) => {
    const url = '/api/login';
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    fetch(url, config)
      .then((response) => {
        const token = response.headers.get('authorization');
        sessionStorage.setItem('token', token);
        return response.json();
      })
      .then((json) => {
        if (json.error) {
          sessionStorage.removeItem('token');
          dispatch(ErrMsg(json.error));
          return;
        }
        dispatch(getUserSuccessfully(json));
      })
      .catch((err) => console.log(err));
  };
};

const getStatus = (token) => {
  return (dispatch) => {
    const url = '/api/login';
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
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        /* if (json.error) {
          sessionStorage.removeItem('token');
          dispatch(ErrMsg(json.error));
          return;
        }
        dispatch(getUserSuccessfully(json)); */
      })
      .catch((err) => console.log(err));
  };
};

export {
  loginUser, getStatus, ErrMsg, ErrClear,
};
