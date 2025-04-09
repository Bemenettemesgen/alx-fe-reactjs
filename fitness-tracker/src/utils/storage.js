// utils/storage.js
export const saveWorkouts = (workouts) => {
    try {
      localStorage.setItem('workouts', JSON.stringify(workouts));
    } catch (error) {
      console.error('Error saving workouts:', error);
    }
  };
  
  export const loadWorkouts = () => {
    try {
      return JSON.parse(localStorage.getItem('workouts')) || [];
    } catch (error) {
      console.error('Error loading workouts:', error);
      return [];
    }
  };