import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Import Components
import { TasksList, Header } from '../components/index';

// Action
import getTasks from '../actions/tasksListAction';
import { Footer } from '../containers';
import Loading from './Loading';

export default function Tasks() {
  const user = useSelector((state) => state.logged);
  const taskList = useSelector((state) => state.taskList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <Loading />
      <main>
        <TasksList data={taskList} />
      </main>
      <Footer />
    </>
  );
}
