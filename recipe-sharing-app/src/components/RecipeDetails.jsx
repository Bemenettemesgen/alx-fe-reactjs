import useRecipeStore from '../recipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { recipeId } = useParams(); // Get the recipe ID from the URL
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === parseInt(recipeId)) // Ensure conversion to integer
    );

    if (!recipe) return <p>Recipe not found.</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <p>Recipe ID: {recipe.id}</p> {/* Explicitly showing recipe.id */}
        </div>
    );
};

export default RecipeDetails;
