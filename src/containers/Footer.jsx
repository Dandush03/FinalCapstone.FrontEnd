import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Action
import {
  searchTask, openPopUp, closePopUp, startTimer,
} from '../actions/task';

// Javascripts
import { timeToString } from '../javascript/time';

// Components
import { TaskStopForm, TaskForm } from '../components/index';

// Images
import addTaskImg from '../assets/images/add.svg';
import trackTasksImg from '../assets/images/track.svg';
import heroProgresImg from '../assets/images/progress.svg';
import heroSession from '../assets/images/user.svg';
import StopImg from '../assets/images/stop.svg';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return null;
  }, [delay]);
}

export default function Footer() {
  const task = useSelector((state) => state.task);
  const location = useSelector((state) => state.location);
  const timer = useSelector((state) => state.timer);

  const dispatch = useDispatch();

  const [time, setTime] = useState('');

  const cronometer = () => {
    const { active, current } = task;
    if (active) {
      setTime(timeToString(timer.timer));
      dispatch(startTimer(current.start, current.category_id));
    }
  };

  useInterval(() => {
    cronometer();
  }, 1000);

  useEffect(() => {
    dispatch(searchTask());
  }, [dispatch]);

  const signOut = () => {
    window.location.replace(`${location}/users/sign_out`);
  };

  const popUp = () => {
    if (task.taskPop) {
      return dispatch(closePopUp());
    }
    return dispatch(openPopUp());
  };

  return (
    <footer>
      <button type="button" onClick={popUp} className={task.active ? 'warning' : ''}>
        {task.active ? <span className={task.taskPop ? 'open' : ''}>{task.taskPop ? <img src={StopImg} alt="Add Tasks" /> : time}</span> : <img src={addTaskImg} alt="Add Tasks" /> }
      </button>
      {task.taskPop && task.active ? <TaskStopForm timer={time} task={task.current} /> : null}
      {task.taskPop && !task.active ? <TaskForm /> : null}
      <NavLink exact to="/tasks" activeClassName="selected">
        <img src={trackTasksImg} alt="Track Your Task" />
      </NavLink>
      <NavLink exact to="/" activeClassName="selected">
        <img src={heroProgresImg} alt="Your Progress" />
      </NavLink>
      <button type="button" onClick={signOut}>
        <img src={heroSession} alt="Your Progress" />
      </button>
    </footer>
  );
}
