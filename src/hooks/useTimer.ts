import {useRef, useState, useEffect} from 'react';
const moment = require('moment/min/moment-with-locales');

const useTimer = (duration: number) => {
  const timerRef = useRef<number | null>(null);
  const [isInProcess, setProcessStatus] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [previousTime, setPreviousTime] = useState(Date.now());
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);

  const updateTimer = () => {
    const currentTime = Date.now();
    const elapsedMilliseconds = currentTime - previousTime;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    setElapsedTime(elapsedTime + elapsedSeconds);
    setTotalElapsedTime(totalElapsedTime + elapsedSeconds);
    setPreviousTime(currentTime);
    timerRef.current = requestAnimationFrame(updateTimer);
  };

  const start = () => {
    setPreviousTime(Date.now());
    setProcessStatus(true);
  };

  const restart = () => {
    setElapsedTime(0);
    setTotalElapsedTime(0);
    setPreviousTime(Date.now());
    setProcessStatus(true);
  };

  const pause = () => {
    setProcessStatus(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setTotalElapsedTime(0);
    setProcessStatus(false);
  };

  const stop = () => {
    if (timerRef.current) {
      cancelAnimationFrame(timerRef.current);
      timerRef.current = null;
    }
  };

  const currentTime = (): string => {
    const remainingTime = duration - totalElapsedTime;
    const exceededTime = totalElapsedTime - duration;
    console.log('remainingTime', remainingTime);

    if (remainingTime < 0) {
      stop();
      return 'end';
    } else {
      return formatTimeInSeconds(remainingTime);
    }
  };

  const formatTimeInSeconds = (second: number): string => {
    const TIME_FORMAT = 'HH:mm:ss';
    return moment.utc(second * 1000).format(TIME_FORMAT);
  };

  useEffect(() => {
    if (isInProcess) {
      updateTimer();
    }
    return () => {
      stop();
    };
  }, [isInProcess]);

  useEffect(() => {
    if (isInProcess) {
      setPreviousTime(Date.now());
    }
  }, [elapsedTime]);

  return {
    time: currentTime(),
    start,
    restart,
    pause,
    reset,
    stop,
  };
};

export default useTimer;
