import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate(); // Initialize navigation

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate('/'); // Redirect to homepage after deletion
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
