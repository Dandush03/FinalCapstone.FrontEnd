import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const validation = (id) => {
  const data = { task: { end: Date.now() } };
  const config = {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  };
  fetch(`/api/tasks/${id}`, config)
    .then((response) => response.json())
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

export default function TaskPopUp({ timer, task }) {
  return (
    <div className="new-task">
      <h1>{task.name}</h1>
      <form onSubmit={() => validation(task.id)}>
        <span>{timer}</span>
        <button type="submit"><span>Stop</span></button>
      </form>
    </div>
  );
}

TaskPopUp.propTypes = {
  timer: PropTypes.string.isRequired,
  task: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
