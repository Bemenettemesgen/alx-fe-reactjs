import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails

function App() {
    return (
        <Router>
            <div>
                <h1>Recipe Sharing App</h1>
                <AddRecipeForm />
                <RecipeList />
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/recipe/:recipeId" element={<RecipeDetails />} /> {/* Route for recipe details */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

