import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { Redirect } from 'react-router-dom';
import { loginUser, ErrMsg, ErrClear } from '../actions/userAction';
// Components
import ErrorMsg from './ErrorMsg';

export default function Img() {
  const msg = useSelector((state) => state.errorMessages);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch(null);

  const formValidation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const email = data.get('email');
    const password = data.get('password');
    if (!email || !password) {
      dispatch(ErrMsg('Username and Password are Required'));
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    dispatch(ErrClear());
  }, [dispatch]);

  if (user.logged) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form action="/POST" onSubmit={formValidation}>
        { msg ? <ErrorMsg msg={msg} /> : null}
        <div>
          <label htmlFor="email">
            <input type="text" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <label htmlFor="submit">
            <input type="submit" value="Submit" />
          </label>
        </div>
      </form>
    </div>
  );
}
