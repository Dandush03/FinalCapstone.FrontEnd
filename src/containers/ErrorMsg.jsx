import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMsg({ msg }) {
  return (
    <div className="errors-msg">
      <span>{msg}</span>
    </div>
  );
}

ErrorMsg.propTypes = {
  msg: PropTypes.string.isRequired,
};
