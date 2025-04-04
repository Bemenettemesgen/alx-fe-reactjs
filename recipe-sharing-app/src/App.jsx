import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
    return (
        <Router>
            <div>
                <h1>Recipe Sharing App</h1>
                <AddRecipeForm />
                <FavoritesList /> {/* Display favorites */}
                <RecommendationsList /> {/* Display recommendations */}
                <RecipeList />
            </div>
        </Router>
    );
}

export default App;
