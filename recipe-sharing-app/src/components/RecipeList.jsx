import useRecipeStore from '../recipeStore';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';


const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div>
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No matching recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;
