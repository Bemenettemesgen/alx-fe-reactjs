import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types';

export default function ExerciseSearch() {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchExercises = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(
        `https://wger.de/api/v2/exercise/?language=2&search=${searchTerm}`
      );
      setExercises(response.data.results);
    } catch (err) {
      setError('Failed to fetch exercises. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm) fetchExercises();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />

      {loading && <LoadingSpinner />}
      
      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded dark:bg-red-200">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <h3 className="font-semibold dark:text-white">{exercise.name}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {exercise.description.replace(/<[^>]+>/g, '')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

ExerciseSearch.propTypes = {
  onSelect: PropTypes.func
};