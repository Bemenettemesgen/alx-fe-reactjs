import { useState } from 'react'

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
      date: new Date().toISOString(),
      sets: parseInt(workout.sets),
      reps: parseInt(workout.reps),
      weight: parseFloat(workout.weight)
    }
    onSave(newWorkout)
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
          required
        />
        <input
          type="number"
          placeholder="Reps"
          value={workout.reps}
          onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={workout.weight}
          onChange={(e) => setWorkout({ ...workout, weight: e.target.value })}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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