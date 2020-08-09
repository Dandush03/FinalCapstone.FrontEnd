import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Loading } from '../components';

export default () => {
  const items = useSelector((state) => state.loadingItems);

  const [time, setTime] = useState(false);
  const [closePage, setClosePage] = useState(false);
  const [loaded, setloaded] = useState(false);
  const [init, setInit] = useState(0);

  const startTimer = () => {
    setTimeout(() => {
      setTime(true);
      setInit(1);
    }, 3000);
  };

  const startClosing = () => {
    setTimeout(() => {
      setClosePage(true);
      setInit(2);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  if (init === 1 && loaded) {
    startClosing();
  }

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
