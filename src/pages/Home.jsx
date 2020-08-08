import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Action
import { getStatus } from '../actions/userAction';

// Assets
import logo from '../assets/images/logo.svg';

// Components
import { Img } from '../containers';
import Loading from './Loading';

export default function Home() {
  const dispath = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispath(getStatus(token));
    }
  }, [dispath]);

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
