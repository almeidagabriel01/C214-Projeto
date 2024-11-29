import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import Jdenticon from "react-jdenticon";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get(`/receita/cursos/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setRecipe(response.data);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar a receita. Tente novamente.");
      }
    };

    fetchRecipe();
  }, [id]);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!recipe) {
    return <p className="text-center">Carregando...</p>;
  }

  return (
    <div className="flex flex-col flex-grow bg-[#F4EDE2]">
      <div className="justify-center items-center w-full max-w-6xl mx-auto">
        {/* Banner */}
        <div className="relative bg-gray-900 text-white overflow-hidden shadow-lg ">
          <Jdenticon
            value={recipe.nome_creator}
            style={{ width: "100%", height: "100%" }}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 flex-col items-end p-10 bg-gradient-to-t from-black via-transparent to-transparent">
            <h2 className="text-4xl font-bold mt-24">{recipe.nome}</h2>
            <h6 className="text-1x1">Por {recipe.nome_creator || "Desconhecido"}</h6>
          </div>
        </div>

        {/* Receita */}
        <div className="bg-white shadow-md p-10 text-[#3F2A17]" style={{ fontFamily: "Space Mono" }}>
          {/* Tempo de preparo */}
          <section className="mb-6">
            <h3 className="text-2xl border-b-2 border-gray-200 pb-2">
              Tempo de preparo
            </h3>
            <p className="mt-4 text-gray-700 font-serif">
              {recipe.tempoDePreparo || "Ingredientes não informados."}
            </p>
          </section>

          {/* Modo de Preparo */}
          <section>
            <h3 className="text-2xl border-b-2 border-gray-200 pb-2">
              Modo de Preparo
            </h3>
            <p className="mt-4 text-gray-700 font-serif">
              {recipe.modoDePeparo || "Modo de preparo não informado."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recipe;