import React, { useState } from 'react';

export default function TaskForm() {
  const [statusMsg, setStatusMsg] = useState(null);
  const [status, setStatus] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const newData = { tasks: {} };
    let validate = true;
    [...data.entries()].forEach((elem) => {
      if (elem[0] === 'name') {
        if (!elem[1]) {
          validate = false;
        }
        if (elem[1].length > 30) {
          validate = false;
        }
      }

      const { tasks } = newData;

      Object.assign(tasks, { [elem[0]]: elem[1] });
    });
    if (!validate) {
      setStatus(false);
      setStatusMsg('*Can\'t be Bigger than 30 Char or Empty');
      return;
    }
    const token = sessionStorage.getItem('token');

    const config = {
      method: form.method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(newData),
    };

    fetch(form.action, config)
      .then((response) => {
        window.location.reload(false);
        return response.json();
      })
    // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };

  return (
    <div className="task-form">
      <h1>Start a Task Now!</h1>
      <form method="POST" action="https://dl-final.herokuapp.com/api/tasks" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">
            <input type="text" name="name" placeholder="Title" />
            <span className={`request ${status ? 'good' : 'bad'}`}>{statusMsg || null}</span>
          </label>
        </div>
        <div>
          <label htmlFor="category_id">
            <select name="category_id">
              <option value="1">Working</option>
              <option value="2">Studing</option>
              <option value="3">Eating</option>
              <option value="4">Sleeping</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="description">
            <textarea name="description" placeholder="Desciption" rows="5" />
          </label>
        </div>
        <div>
          <button type="submit">Start!</button>
        </div>
      </form>
    </div>
  );
}
