import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock recipe data from data.json
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 mt-1">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 mt-3 inline-block hover:underline"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/add"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add New Recipe
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
