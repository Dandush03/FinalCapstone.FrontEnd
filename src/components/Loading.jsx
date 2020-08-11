import React from 'react';
import PropTypes from 'prop-types';

// Assets
import Logo from '../assets/images/SimpleLog.svg';

export default function loading({ time, loaded }) {
  return (
    <div className={`loading-container ${time && loaded ? 'close-loading' : ''}`}>
      <div className="loading-page">
        <img src={Logo} alt="Logo Img" className="logo-img" />
        <div>
          <h1 className="dot one">.</h1>
          <h1 className="dot two">.</h1>
          <h1 className="dot three">.</h1>
          <h1 className="dot fourth">.</h1>
        </div>
      </div>
    </div>
  );
}

loading.propTypes = {
  loaded: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
};
