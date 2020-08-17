import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

// Actions
import { registrateUser, ErrMsg, getStatus } from '../actions/userAction';
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
    let validate = true;
    const form = e.target;
    const data = new FormData(form);
    [...data.values()].forEach((value) => {
      if (!value) {
        dispatch(ErrMsg('All fields are Required'));
        validate = false;
      }
    });
    if (!validate) {
      return;
    }
    const password = data.get('password');
    // eslint-disable-next-line camelcase
    const password_confirmation = data.get('password_confirmation');
    // eslint-disable-next-line camelcase
    if (password !== password_confirmation) {
      dispatch(ErrMsg('Passwords Don\'t Match'));
      return;
    }
    const username = data.get('username');
    const email = data.get('email');
    // eslint-disable-next-line camelcase
    const full_name = data.get('full_name');

    dispatch(registrateUser({
      full_name, username, email, password, password_confirmation,
    }));
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="user-form registration">
      <form action="/POST" onSubmit={formValidation}>
        <h1>Login Form</h1>
        { msg ? <ErrorMsg msg={msg} /> : null}
        <div>
          <div>
            <label htmlFor="full_name">
              <span>full name</span>
              <input type="text" name="full_name" placeholder="Full Name" />
            </label>
          </div>
          <div>
            <label htmlFor="username">
              <span>username</span>
              <input type="text" name="username" placeholder="Username" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <span>email</span>
              <input type="email" name="email" placeholder="Email" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <span>password</span>
              <input type="password" name="password" placeholder="Password" />
            </label>
          </div>
          <div>
            <label htmlFor="password_confirmation">
              <span>confirm password</span>
              <input type="password" name="password_confirmation" placeholder="Confirm Password" />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="submit">
            <input type="submit" value="Submit" />
          </label>
        </div>
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}
