import { useState, useEffect } from 'react';
import WorkoutLogForm from '../components/WorkoutLogForm';
import ProgressChart from '../components/ProgressChart';
import WorkoutHistory from '../components/WorkoutHistory';
import { loadWorkouts } from '../utils/storage';

export default function Dashboard() {
  const [workouts, setWorkouts] = useState(loadWorkouts());

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Log New Workout</h2>
        <WorkoutLogForm onSave={(newWorkout) => setWorkouts([...workouts, newWorkout])} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Progress Overview</h2>
        <ProgressChart workouts={workouts} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Recent Workouts</h2>
        <WorkoutHistory workouts={workouts.slice(-3).reverse()} />
      </div>
    </div>
  );
}