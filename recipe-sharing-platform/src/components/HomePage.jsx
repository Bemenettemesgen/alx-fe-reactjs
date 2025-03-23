import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch mock data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow">
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.summary}</p>
          <button className="mt-4 text-blue-500 underline">View Recipe</button>
</div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
