import { useState } from 'react';
import PropTypes from 'prop-types';

export default function WorkoutHistory({ workouts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = workout.exercise.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = filterDate ? 
      new Date(workout.date).toLocaleDateString() === new Date(filterDate).toLocaleDateString() : 
      true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      {filteredWorkouts.length === 0 ? (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
          No workouts found matching your criteria
        </div>
      ) : (
        filteredWorkouts.map((workout) => (
          <div key={workout.id} className="p-4 mb-2 bg-white dark:bg-gray-800 rounded shadow">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold dark:text-white">{workout.exercise}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(workout.date).toLocaleDateString()}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 text-gray-600 dark:text-gray-300">
              <p>Sets: {workout.sets}</p>
              <p>Reps: {workout.reps}</p>
              <p>Weight: {workout.weight}kg</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

WorkoutHistory.propTypes = {
  workouts: PropTypes.array.isRequired
};