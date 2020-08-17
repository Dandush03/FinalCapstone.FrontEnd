import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar({ percentage, name }) {
  return (
    <div className="progress-container">
      <CircularProgressbar
        value={percentage}
        maxValue={1}
        text={`${(percentage * 100).toFixed(2)}%`}
        strokeWidth={10}
        className="progress"
      />
      <span>{name}</span>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
