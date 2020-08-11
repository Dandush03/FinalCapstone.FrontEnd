import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Loading } from '../components';

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

export default () => {
  const items = useSelector((state) => state.loadingItems);
  const [time, setTime] = useState(false);
  const [closePage, setClosePage] = useState(false);
  const [loaded, setloaded] = useState(false);
  const [init, setInit] = useState(0);

  const startTimer = () => {
    setTime(true);
    setInit(1);
    if (init === 1 && loaded) {
      setClosePage(true);
      setInit(2);
    }
  };

  useInterval(() => {
    startTimer();
  }, 3000);

  if (items === 0 && !loaded) {
    setloaded(true);
  }

  if (loaded && closePage) {
    return null;
  }

  return (
    <Loading time={time} loaded={loaded} />
  );
};
