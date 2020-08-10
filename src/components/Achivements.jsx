import React from 'react';
import PropTypes from 'prop-types';

// Javascript
import { timeToString } from '../javascript/time';
import Img from '../containers/Img';

export default function Achivement({
  time, name, goal, img,
}) {
  const timer = timeToString(time);
  return (
    <div className="achivement">
      <Img imgUrl={img} imgAlt={`${name} Profile`} />
      <div className="progress-container">
        <h3>{name}</h3>
        <p>
          Time Spent:
          <span>{timer}</span>
        </p>
        <p>
          Goal:
          <span>{goal}</span>
          Hours
        </p>
      </div>
    </div>
  );
}

Achivement.propTypes = {
  time: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
