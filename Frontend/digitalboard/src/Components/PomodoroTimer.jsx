import React, { useState, useEffect } from 'react';
import '../styles/PomodoroTimer.css';

const PomodoroTimer = () => {
  const focusMinutes = 25;
  const [minutes, setMinutes] = useState(focusMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            resetTimer();
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
  }, [isActive, seconds, minutes]);

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(focusMinutes);
    setSeconds(0);
  };

  return (
    <div className="pomodoro-container" style={{ width: '100%' ,height:'40vh'}}>
      <h2>Pomodoro Timer</h2>
      <p>{isActive ? 'Focus Time!' : 'Ready to Start'}</p>
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
