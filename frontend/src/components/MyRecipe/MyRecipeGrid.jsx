import React from "react";
import MyRecipeCard from "./MyRecipeCard";

const recipes = [
  {
    title: "Pão de Queijo",
    author: "Vitor Juliano",
    authorId: "vitor.juliano@example.com",
  },
  {
    title: "Yakisoba de Frango",
    author: "Vitor Juliano",
    authorId: "vitor.juliano@example.com",
  },
  {
    title: "Mousse de Maracujá",
    author: "Vitor Juliano",
    authorId: "vitor.juliano@example.com",
  },
];

const MyRecipeGrid = () => {
  return (
    <div className="px-8 py-10 bg-[#F4EDE2] min-h-screen" style={{ fontFamily: 'Space Mono' }}>
      <h2 className="flex justify-center text-4xl font-bold font-serif mb-8 text-[#3F2A17]">
        Minhas Receitas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <MyRecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default MyRecipeGrid;