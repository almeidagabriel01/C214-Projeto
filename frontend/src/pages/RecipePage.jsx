import React from "react";
import RecipeGrid from "../components/Recipe/RecipeGrid";

const RecipePage = () => {
  return (
    <div className="flex flex-col flex-grow bg-[#F4EDE2]">
      <RecipeGrid />
    </div>
  );
};

export default RecipePage;