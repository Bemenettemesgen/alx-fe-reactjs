// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import WorkoutLog from './components/WorkoutLog';
import WorkoutHistory from './components/WorkoutHistory';
import ProgressChart from './components/ProgressChart';
import ExerciseList from './components/ExerciseList';

function App() {
  const [workouts, setWorkouts] = useState([]);
  
  // Function to add a new workout
  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="my-4">
        <WorkoutLog addWorkout={addWorkout} />
      </div>
      <div className="my-4">
        <WorkoutHistory workouts={workouts} />
      </div>
      <div className="my-4">
        <ProgressChart workouts={workouts} />
      </div>
      <div className="my-4">
        <ExerciseList />
      </div>
    </div>
  );
}

export default App;
