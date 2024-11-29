import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import RecipeCard from "./RecipeCard";

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Add a loading state

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
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Carregando receitas...</p>;
  }

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
      ) : recipes.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-20"
          style={{ fontFamily: "Space Mono" }}
        >
          <h2 className="text-3xl font-bold text-[#3F2A17] mb-4">
            Nenhuma Receita Disponível
          </h2>
          <p className="text-xl text-gray-600 text-center">
            Não encontramos nenhuma receita no momento. Por favor, volte mais
            tarde!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.nome}
              author={recipe.nome_creator || "Desconhecido"}
              authorId={recipe.id_creator}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeGrid;
