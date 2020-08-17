import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const validation = (id, e) => {
  e.preventDefault();
  const token = sessionStorage.getItem('token');
  const data = { task: { end: Date.now() } };
  const url = `https://dl-final.herokuapp.com/api/tasks/${id}`;
  const config = {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  };
  fetch(url, config)
    .then((response) => {
      window.location.reload(false);
      return response.json();
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

export default function TaskPopUp({ timer, task }) {
  return (
    <div className="new-task">
      <h1>{task.name}</h1>
      <form onSubmit={(e) => validation(task.id, e)}>
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
