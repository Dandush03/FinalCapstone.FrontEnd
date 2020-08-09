import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

// Action
import {
  searchTask, openPopUp, closePopUp, startTimer,
} from '../actions/taskAction';
import { getUserLogout } from '../actions/userAction';

// Javascripts
import { timeToString } from '../javascript/time';

// Components
import { TaskStopForm, TaskForm } from '../components/index';
import Img from './Img';

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

const Footer = () => {
  const task = useSelector((state) => state.task);
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
    sessionStorage.removeItem('token');
    dispatch(getUserLogout());
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
        {task.active ? <span className={task.taskPop ? 'open' : ''}>{task.taskPop ? <Img imgUrl={StopImg} imgAlt="Add Tasks" /> : time}</span> : <Img imgUrl={addTaskImg} imgAlt="Add Tasks" /> }
      </button>
      {task.taskPop && task.active ? <TaskStopForm timer={time} task={task.current} /> : null}
      {task.taskPop && !task.active ? <TaskForm /> : null}
      <NavLink exact to="/tasks" activeClassName="selected">
        <Img imgUrl={trackTasksImg} imgAlt="Track Your Task" />
      </NavLink>
      <NavLink exact to="/" activeClassName="selected">
        <Img imgUrl={heroProgresImg} imgAlt="Your Progress" />
      </NavLink>
      <button type="button" onClick={signOut}>
        <Img imgUrl={heroSession} imgAlt="Your Progress" />
      </button>
    </footer>
  );
};

export default withRouter(Footer);
