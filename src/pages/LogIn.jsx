import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

// Actions
import { loginUser, ErrMsg, getStatus } from '../actions/userAction';
// Components
import ErrorMsg from '../containers/ErrorMsg';

export default function Img() {
  const msg = useSelector((state) => state.errorMessages);
  const user = useSelector((state) => state.logged);
  const dispatch = useDispatch(null);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispatch(getStatus(token));
    }
  }, [dispatch]);

  const formValidation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const login = data.get('login');
    const password = data.get('password');
    if (!login || !password) {
      dispatch(ErrMsg('Username and Password are Required'));
      return;
    }
    dispatch(loginUser({ login, password }));
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="user-form">
      <form action="/POST" onSubmit={formValidation}>
        <h1>Login Form</h1>
        { msg ? <ErrorMsg msg={msg} /> : null}
        <div>
          <div>
            <label htmlFor="login">
              <span>login</span>
              <input type="text" name="login" placeholder="Username/Email" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <span>password</span>
              <input type="password" name="password" placeholder="Password" />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="submit">
            <input type="submit" value="Submit" />
          </label>
        </div>
      </form>
      <Link to="/registration">Sing Up!</Link>
    </div>
  );
}
