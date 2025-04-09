import WorkoutHistory from '../components/WorkoutHistory';
import { loadWorkouts } from '../utils/storage';

export default function WorkoutHistoryPage() {
  const workouts = loadWorkouts();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Workout History</h1>
      <WorkoutHistory workouts={workouts} />
    </div>
  );
}