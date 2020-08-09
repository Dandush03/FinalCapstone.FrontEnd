/* eslint-disable camelcase */
import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default function TasksGroup({ data, date }) {
  const [opened, setOpened] = useState(false);

  const openedHandler = () => {
    if (opened) {
      setOpened(false);
      return;
    }
    setOpened(true);
  };

  useEffect(() => {
    const currentDate = new Date(Date.now()).toDateString();
    if (date === currentDate) {
      openedHandler();
    }
  }, [date]);

  const Tasks = data.map((t) => <Task data={t} key={`Task-${t.id}`} />);
  return (
    <div
      className={`task-group ${opened ? 'open' : 'close'}`}
      onClick={openedHandler}
      onKeyDown={openedHandler}
      role="button"
      tabIndex={0}
    >
      <h2>{date}</h2>
      {Tasks}
    </div>
  );
}

TasksGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
};
