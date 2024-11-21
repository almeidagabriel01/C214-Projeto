import React from "react";
import Header from "../components/Header";
import MyRecipeGrid from "../components/MyRecipe/MyRecipeGrid";

const RecipePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <MyRecipeGrid />
    </div>
  );
};

export default RecipePage;