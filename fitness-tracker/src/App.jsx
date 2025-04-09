import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import ExerciseList from './pages/ExerciseList'
import WorkoutHistoryPage from './pages/WorkoutHistoryPage'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exercises" element={<ExerciseList />} />
              <Route path="/history" element={<WorkoutHistoryPage />} />
            </Routes>
          </div>
        </div>
      </ErrorBoundary>
    </Router>
  )
}