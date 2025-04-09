import { Link } from 'react-router-dom'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold dark:text-white">
          Fitness Tracker
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/history" className="dark:text-gray-200 hover:text-blue-500">
            History
          </Link>
          <Link to="/exercises" className="dark:text-gray-200 hover:text-blue-500">
            Exercises
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <FiSun className="w-6 h-6 text-yellow-400" />
            ) : (
              <FiMoon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}