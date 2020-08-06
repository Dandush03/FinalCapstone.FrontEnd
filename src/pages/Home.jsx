import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
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

export default App;
