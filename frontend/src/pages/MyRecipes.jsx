import React from "react";
import MyRecipeGrid from "../components/MyRecipe/MyRecipeGrid";

const RecipePage = () => {
  return (
    <div className="flex flex-col flex-grow first-letter:bg-gray-50">
      <MyRecipeGrid />
    </div>
  );
};

export default RecipePage;