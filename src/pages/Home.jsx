import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/App.scss';

// Components
import { Img } from '../containers';
import Loading from './Loading';

export default function Home() {
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
