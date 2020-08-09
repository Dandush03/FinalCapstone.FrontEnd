import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Action
import { getStatus } from '../actions/userAction';

// Assets
import logo from '../assets/images/logo.svg';

// Components
import { Img } from '../containers';
import Loading from './Loading';

export default function Home() {
  const dispath = useDispatch();
  const user = useSelector((state) => state.logged);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispath(getStatus(token));
    }
  }, [dispath, token]);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="app">
      <Loading />
      <header className="app-header">
        <Img imgUrl={logo} imgClass="app-logo" imgAlt="logo" />
        <p>
          Edit
          {' '}
          <code>src/pages/Home.jsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
