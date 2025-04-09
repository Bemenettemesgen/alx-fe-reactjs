import ExerciseSearch from '../components/ExerciseSearch';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

export default function ExerciseList() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Exercise Database</h1>
      <ErrorBoundary>
        <ExerciseSearch />
      </ErrorBoundary>
    </div>
  );
}