import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Action
import loadData from '../actions/taskListByCategoryAction';

// Javascript
import GroupData from '../javascript/progress';
import Swipe from '../javascript/swipedEvent';
import ChangeOption from '../javascript/changeOption';

// Images
import workingImg from '../assets/images/working.svg';
import sleepingImg from '../assets/images/sleeping.svg';
import studingImg from '../assets/images/studing.svg';
import eatingImg from '../assets/images/eating.svg';

// Components
import { ProgressBar, Achivements } from '../components';

export default function Progress() {
  const taskByCategory = useSelector((state) => state.taskByCategory);
  const timer = useSelector((state) => state.timer);

  const dispatch = useDispatch();

  const [range, setRange] = useState(1);
  useEffect(() => {
    const e = document.getElementById('date-range');
    const swipe = new Swipe(e);
    swipe.onLeft(() => {
      ChangeOption(-1, e);
      e.click();
    });
    swipe.onRight(() => {
      ChangeOption(1, e);
      e.click();
    });
    swipe.run();
  }, []);

  useEffect(() => {
    dispatch(loadData(range));
  }, [dispatch, range]);

  const handlerChanger = (e) => {
    setRange(e.target.value);
    dispatch(loadData(e.target.value));
  };

  const {
    working, studing, eating, sleeping,
  } = taskByCategory;

  const wExtra = timer.category === 1 ? timer.timer : 0;
  const sExtra = timer.category === 2 ? timer.timer : 0;
  const eExtra = timer.category === 3 ? timer.timer : 0;
  const slExtra = timer.category === 4 ? timer.timer : 0;
  return (
    <>
      <div className="selection">
        <select name="date" id="date-range" onChange={handlerChanger} onClick={handlerChanger}>
          <option value="1">Today</option>
          <option value="7">This Week</option>
          <option value="30">This Month</option>
        </select>
      </div>
      <div className="progress">
        {
            working
              ? <ProgressBar percentage={GroupData(working, (10 * range), wExtra)} name="Working" />
              : null
            }
        {
            studing
              ? <ProgressBar percentage={GroupData(studing, (4 * range), sExtra)} name="Studing" />
              : null
          }
        {
            eating
              ? <ProgressBar percentage={GroupData(eating, (2 * range), eExtra)} name="Eating" />
              : null
            }
        {
            sleeping
              ? <ProgressBar percentage={GroupData(sleeping, (8 * range), slExtra)} name="Sleeping" />
              : null
          }
      </div>
      <div className="achivements">
        {
            working
              ? <Achivements time={GroupData(working, null, wExtra)} name="Working" goal={(10 * range)} img={workingImg} />
              : null
          }
        {
            studing
              ? <Achivements time={GroupData(studing, null, sExtra)} name="Studing" goal={(4 * range)} img={studingImg} />
              : null
          }
        {
            eating
              ? <Achivements time={GroupData(eating, null, eExtra)} name="Eating" goal={(2 * range)} img={eatingImg} />
              : null
          }
        {
            sleeping
              ? <Achivements time={GroupData(sleeping, null, slExtra)} name="Sleeping" goal={(8 * range)} img={sleepingImg} />
              : null
          }
      </div>
    </>
  );
}
