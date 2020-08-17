const timeConverter = (startingTime) => {
  const time = new Date(startingTime);
  const now = new Date();
  const ms = now - time;
  return Math.floor(ms / 1000);
};

const timeToString = (ms) => {
  const hrs = Math.floor((ms / 60) / 60);
  const tempMin = Math.floor((ms / 60) % 60);
  const min = tempMin.toString().length === 1 ? `0${tempMin}` : tempMin;
  const tempSec = Math.floor(ms % 60);
  const sec = tempSec.toString().length === 1 ? `0${tempSec}` : tempSec;
  return `${hrs}:${min}:${sec}`;
};

export { timeConverter, timeToString };
