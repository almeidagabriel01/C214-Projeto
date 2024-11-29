import React, { useEffect, useState, useContext } from "react";
import MyRecipeCard from "./MyRecipeCard";
import api from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";

const MyRecipeGrid = () => {
  const { auth } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!auth.id || isNaN(auth.id)) {
        console.error("ID inválido:", auth.id);
        setError("ID do usuário não encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/receitas/cursos/pessoal/${auth.id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`, // Use o token armazenado no contexto
          },
        });
        setRecipes(response.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError("Nenhuma receita encontrada para este usuário.");
        } else {
          setError("Erro ao carregar receitas. Tente novamente.");
          console.error("Erro ao buscar receitas:", err.response || err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [auth.id, auth.token]);

  // Função para remover a receita do estado
  const handleDeleteRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  if (loading) {
    return <p className="text-center text-gray-500">Carregando receitas...</p>;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-[#F4EDE2]" style={{ fontFamily: "Space Mono" }}>
        <h2 className="text-3xl font-bold text-[#3F2A17] mb-4">Nenhuma Receita Encontrada</h2>
        <p className="text-xl text-gray-600 text-center">
          Parece que você ainda não cadastrou nenhuma receita. Clique no botão abaixo para começar!
        </p>
        <button
          onClick={() => window.location.href = "/adicionar-receita"}
          className="mt-6 bg-[#3F2A17] text-white py-2 px-6 rounded-lg hover:bg-opacity-90 transition"
        >
          Adicionar Receita
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow px-8 py-10 bg-[#F4EDE2]" style={{ fontFamily: "Space Mono" }}>
      <h2 className="flex justify-center text-4xl font-bold font-serif mb-8 text-[#3F2A17]">
        Minhas Receitas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <MyRecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.nome}
            author={recipe.nome_creator || "Desconhecido"}
            authorId={recipe.id_creator}
            onDelete={handleDeleteRecipe} // Passa a função para o card
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipeGrid;