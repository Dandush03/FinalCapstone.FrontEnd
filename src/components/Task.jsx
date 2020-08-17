/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

export default function Task({ data }) {
  const [opened, setOpened] = useState(false);

  const openHandler = (e) => {
    e.stopPropagation();
    if (opened) {
      setOpened(false);
      return;
    }
    setOpened(true);
  };

  const
    {
      id,
      name,
      description,
      start,
      end,
      hours,
      minutes,
      seconds,
      category_id,
    } = data;

  const categoryArr = ['Work', 'Studies', 'Eat', 'Sleep'];
  const tempStart = new Date(Date.parse(start)).toTimeString();
  const tempEnd = new Date(Date.parse(end)).toTimeString();
  let tempSec;
  let tempMin;
  if (seconds) {
    tempSec = seconds.toString().length === 1 ? `0${seconds}` : seconds;
    tempMin = minutes.toString().length === 1 ? `0${minutes}` : minutes;
  }
  return (
    <div
      className={`task ${opened ? 'open' : 'close'}`}
      onClick={openHandler}
      onKeyDown={openHandler}
      role="button"
      tabIndex={0}
      name={id}
    >
      <div className="preview">
        <div className="info">
          <h1>{name}</h1>
          <span>{categoryArr[category_id - 1]}</span>
        </div>
        <div className="time">
          <span>{tempEnd === 'Invalid Date' ? 'Still Running' : `${hours}:${tempMin}:${tempSec}`}</span>
        </div>
      </div>
      <div className="more-info">
        <div className="time">
          <span className="time-string">
            From:
            <span>{tempStart.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')}</span>
          </span>
          <span className="time-string">
            To:
            <span>{tempEnd === 'Invalid Date' ? 'Still Running' : tempStart.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')}</span>
          </span>
        </div>
        <p>
          Description:
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
}

Task.propTypes = {
  data: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
