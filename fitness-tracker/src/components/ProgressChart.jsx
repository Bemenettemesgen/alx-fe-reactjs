import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ProgressChart({ workouts }) {
  const processData = () => {
    return workouts.map(workout => ({
      date: new Date(workout.date).toLocaleDateString(),
      weight: workout.weight,
      volume: workout.sets * workout.reps * workout.weight
    }))
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Progress Overview</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={processData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="weight" 
              stroke="#3b82f6" 
              name="Weight (kg)"
            />
            <Line 
              type="monotone" 
              dataKey="volume" 
              stroke="#10b981" 
              name="Volume (kg)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}