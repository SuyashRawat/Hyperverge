import React, { useState, useEffect } from 'react';
import '../PomodoroTimer.css';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsBreak(!isBreak);
            setMinutes(isBreak ? 25 : 5);
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && minutes !== 0 && seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, seconds]);

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setIsBreak(false);
  };

  return (
    <div className="pomodoro-container"
    style={{width:'100%'}}>
      <h2>Pomodoro Timer</h2>
      <p>{isBreak ? 'Break Time!' : 'Focus Time!'}</p>
      <div className="timer">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
