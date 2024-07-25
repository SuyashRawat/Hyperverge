import React, { useState, useEffect } from 'react';
import '../styles/PomodoroTimer.css';

const PomodoroTimer = () => {
  const [focusMinutes, setFocusMinutes] = useState(25);
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

  const handleFocusChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setFocusMinutes(value);
    if (!isActive) {
      setMinutes(value);
    }
  };

  return (
    <div className="pomodoro-container" style={{ width: '100%' }}>
      <h2>Pomodoro Timer</h2>
      <p>{isActive ? 'Focus Time!' : 'Set Time and Start'}</p>
      <div className="timer">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="time-settings">
        <label>
          Focus Time (minutes):
          <input
            type="number"
            value={focusMinutes}
            onChange={handleFocusChange}
            placeholder="Enter minutes"
            min="1"
          />
        </label>
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
