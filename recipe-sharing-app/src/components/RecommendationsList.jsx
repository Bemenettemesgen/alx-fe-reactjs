import useRecipeStore from '../recipeStore';

const RecommendationsList = () => {
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
    const recommendations = useRecipeStore((state) => state.recommendations);

    return (
        <div>
            <h2>Recommended for You</h2>
            <button onClick={generateRecommendations}>Generate Recommendations</button>
            {recommendations.length > 0 ? (
                recommendations.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No recommendations yet.</p>
            )}
        </div>
    );
};

export default RecommendationsList;
