import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import RecipeCard from "./RecipeCard";

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get("/receita/cursos", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setRecipes(response.data); // Define os dados das receitas no estado
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar as receitas. Tente novamente.");
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div
      className="flex flex-col flex-grow px-8 py-10 bg-[#F4EDE2]"
      style={{ fontFamily: "Space Mono" }}
    >
      <h2 className="flex justify-center text-4xl font-bold font-serif mb-8 text-[#3F2A17]">
        Receitas
      </h2>
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.nome}
              author={recipe.author || "Desconhecido"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeGrid;