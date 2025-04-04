import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
    return (
        <Router>
            <div>
                <h1>Recipe Sharing App</h1>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
            </div>
        </Router>
    );
}

export default App;
