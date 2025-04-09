import { useState } from 'react'
import { saveWorkouts } from '../utils/storage'

export default function WorkoutLogForm({ onSave }) {
  const [workout, setWorkout] = useState({
    exercise: '',
    sets: '',
    reps: '',
    weight: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newWorkout = {
      ...workout,
      id: Date.now(),
      date: new Date().toISOString(),
      sets: parseInt(workout.sets),
      reps: parseInt(workout.reps),
      weight: parseFloat(workout.weight)
    }
    
    onSave(prev => {
      const updated = [...prev, newWorkout]
      saveWorkouts(updated)
      return updated
    })
    
    setWorkout({ exercise: '', sets: '', reps: '', weight: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <input
        type="text"
        placeholder="Exercise"
        value={workout.exercise}
        onChange={(e) => setWorkout({ ...workout, exercise: e.target.value })}
        className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        required
      />
      <div className="grid grid-cols-3 gap-2">
        <input
          type="number"
          placeholder="Sets"
          value={workout.sets}
          onChange={(e) => setWorkout({ ...workout, sets: e.target.value })}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          min="1"
          required
        />
        <input
          type="number"
          placeholder="Reps"
          value={workout.reps}
          onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          min="1"
          required
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={workout.weight}
          onChange={(e) => setWorkout({ ...workout, weight: e.target.value })}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          min="0"
          step="0.1"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Save Workout
      </button>
    </form>
  )
}