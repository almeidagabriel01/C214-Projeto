import React from "react";
import Header from "../components/Header";
import RecipeGrid from "../components/Recipe/RecipeGrid";

const RecipePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <RecipeGrid />
    </div>
  );
};

export default RecipePage;