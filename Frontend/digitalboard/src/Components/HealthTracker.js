import React, { useState, useEffect } from 'react';
import '../styles/HealthTracker.css';

const HealthTracker = () => {
  // States for workout tracking
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    date: '',
    type: '',
    duration: '',
    calories: '',
    notes: ''
  });

  // States for filtering
  const [filter, setFilter] = useState({
    date: '',
    minDuration: '',
    maxDuration: '',
    minCalories: '',
    maxCalories: ''
  });

  // States for collapsible sections
  const [isAddWorkoutVisible, setIsAddWorkoutVisible] = useState(false);
  const [isPreviousWorkoutsVisible, setIsPreviousWorkoutsVisible] = useState(true);

  // Fetch stored data on component mount
  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts'));

    if (storedWorkouts) setWorkouts(storedWorkouts);
  }, []);

  // Save data to localStorage whenever workouts state changes
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = () => {
    if (newWorkout.date && newWorkout.type.trim() && newWorkout.duration && newWorkout.calories) {
      setWorkouts([...workouts, { id: Date.now(), ...newWorkout }]);
      setNewWorkout({ date: '', type: '', duration: '', calories: '', notes: '' });
      setIsAddWorkoutVisible(false); // Hide section after adding
    }
  };

  const applyFilter = (workout) => {
    const { date, minDuration, maxDuration, minCalories, maxCalories } = filter;
    const workoutDate = new Date(workout.date).toDateString();
    const workoutDuration = parseFloat(workout.duration);
    const workoutCalories = parseFloat(workout.calories);

    const dateMatch = !date || workoutDate === new Date(date).toDateString();
    const durationMatch = (!minDuration || workoutDuration >= minDuration) && (!maxDuration || workoutDuration <= maxDuration);
    const caloriesMatch = (!minCalories || workoutCalories >= minCalories) && (!maxCalories || workoutCalories <= maxCalories);

    return dateMatch && durationMatch && caloriesMatch;
  };

  const filteredWorkouts = workouts.filter(applyFilter);

  return (
    <div className="health-tracker-container">
      <h2>Health Tracker</h2>

      <button className="toggle-button" onClick={() => setIsAddWorkoutVisible(!isAddWorkoutVisible)}>
        {isAddWorkoutVisible ? 'Hide Add Workout' : 'Add Workout'}
      </button>

      {isAddWorkoutVisible && (
        <div className="tracker-section">
          <input
            type="date"
            value={newWorkout.date}
            onChange={(e) => setNewWorkout({ ...newWorkout, date: e.target.value })}
            placeholder="Date"
          />
          <input
            type="text"
            value={newWorkout.type}
            onChange={(e) => setNewWorkout({ ...newWorkout, type: e.target.value })}
            placeholder="Type"
          />
          <input
            type="number"
            value={newWorkout.duration}
            onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })}
            placeholder="Duration (min)"
          />
          <input
            type="number"
            value={newWorkout.calories}
            onChange={(e) => setNewWorkout({ ...newWorkout, calories: e.target.value })}
            placeholder="Calories"
          />
          <textarea
            value={newWorkout.notes}
            onChange={(e) => setNewWorkout({ ...newWorkout, notes: e.target.value })}
            placeholder="Notes"
          />
          <button onClick={addWorkout}>Add Workout</button>
        </div>
      )}

      <button className="toggle-button" onClick={() => setIsPreviousWorkoutsVisible(!isPreviousWorkoutsVisible)}>
        {isPreviousWorkoutsVisible ? 'Hide Previous Workouts' : 'Show Previous Workouts'}
      </button>

      {isPreviousWorkoutsVisible && (
        <div className="tracker-section filter-section">
          <h3>Filter Workouts</h3>
          <div className="filter-inputs">
            <input
              type="date"
              value={filter.date}
              onChange={(e) => setFilter({ ...filter, date: e.target.value })}
              placeholder="Date"
            />
            <input
              type="number"
              value={filter.minDuration}
              onChange={(e) => setFilter({ ...filter, minDuration: e.target.value })}
              placeholder="Min Duration"
            />
            <input
              type="number"
              value={filter.maxDuration}
              onChange={(e) => setFilter({ ...filter, maxDuration: e.target.value })}
              placeholder="Max Duration"
            />
            <input
              type="number"
              value={filter.minCalories}
              onChange={(e) => setFilter({ ...filter, minCalories: e.target.value })}
              placeholder="Min Calories"
            />
            <input
              type="number"
              value={filter.maxCalories}
              onChange={(e) => setFilter({ ...filter, maxCalories: e.target.value })}
              placeholder="Max Calories"
            />
          </div>
          <div className="workout-list-container">
            {filteredWorkouts.length > 0 ? (
              filteredWorkouts.map(workout => (
                <div key={workout.id} className="workout-card">
                  <strong>{new Date(workout.date).toDateString()}</strong>
                  <p>Type: {workout.type}</p>
                  <p>Duration: {workout.duration} min</p>
                  <p>Calories: {workout.calories} cal</p>
                  <p>Notes: {workout.notes}</p>
                </div>
              ))
            ) : (
              <p>No workouts match the filter criteria</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthTracker;
