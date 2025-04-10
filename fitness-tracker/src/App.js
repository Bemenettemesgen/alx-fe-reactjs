// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WorkoutLog from './components/WorkoutLog';
import WorkoutHistory from './components/WorkoutHistory';
import ProgressChart from './components/ProgressChart';
import ExerciseList from './components/ExerciseList';
import axios from 'axios';

// Add to .env file
const WGER_API_KEY = '8558166eed80551cc51d74a17f80cc2b02de64e7';
const API_HEADERS = {
  headers: {
    Authorization: `Token ${WGER_API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch exercises on mount
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          'https://wger.de/api/v2/exercise/?limit=100&language=2',
          API_HEADERS
        );
        setExercises(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, []);

  // Add new workout
  const addWorkout = (workout) => {
    const newWorkout = {
      ...workout,
      id: Date.now(),
      date: new Date().toISOString()
    };
    setWorkouts([...workouts, newWorkout]);
  };

  if (isLoading) return <div className="text-center py-4">Loading exercises...</div>;
  if (error) return <div className="text-red-500 text-center py-4">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="my-4">
        <WorkoutLog addWorkout={addWorkout} exercises={exercises} />
      </div>
      <div className="my-4">
        <WorkoutHistory workouts={workouts} />
      </div>
      <div className="my-4">
        <ProgressChart workouts={workouts} />
      </div>
      <div className="my-4">
        <ExerciseList exercises={exercises} />
      </div>
    </div>
  );
}

export default App;
