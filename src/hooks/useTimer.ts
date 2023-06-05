import {useRef, useState, useEffect} from 'react';
const moment = require('moment/min/moment-with-locales');

const useTimer = (duration: number) => {
  const timerRef = useRef<number | null>(null);
  const [endTime, setEndTime] = useState(moment());
  const [elapsedTime, setElapsedTime] = useState(0);

  const start = () => {
    setEndTime(moment().add(duration, 'second'));
  };

  const restart = () => {
    setEndTime(moment().add(duration, 'second'));
  };

  const pause = () => {
    // pause TODO
  };

  const reset = () => {
    // reset TODO
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const currentTime = (): string => {
    const remainingTime = duration - elapsedTime;
    const exceededTime = elapsedTime - duration;

    if (remainingTime < 0) {
      // 타이머 업카운팅
      // return '+' + formatTimeInSeconds(exceededTime);
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
    const updateTimer = () => {
      timerRef.current = setTimeout(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    };
    updateTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
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
