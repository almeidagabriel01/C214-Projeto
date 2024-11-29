import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

function EditRecipe() {
  const { id: recipeId } = useParams(); // Capturar o ID da URL
  const [recipe, setRecipe] = useState(null); // Dados da receita
  const [formData, setFormData] = useState({
    title: "",
    prepTime: "",
    preparation: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { auth } = useContext(AuthContext);

  // Buscar os dados da receita para preencher o formulário
  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/receita/cursos/${recipeId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const { nome, modoDePeparo, tempoDePreparo } = response.data;
        setRecipe(response.data); // Atualizar os dados da receita
        setFormData({
          title: nome,
          prepTime: tempoDePreparo.toString(),
          preparation: modoDePeparo,
        });
      } catch (err) {
        setError("Erro ao carregar a receita. Tente novamente.");
        console.error("Erro:", err.response || err);
      } finally {
        setLoading(false);
      }
    };

    if (recipeId) {
      fetchRecipe();
    }
  }, [recipeId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await api.put(
        '/receita/update',
        {
          id: recipeId,
          nome: formData.title,
          modoDePeparo: formData.preparation,
          tempoDePreparo: parseInt(formData.prepTime, 10),
          id_creator: auth.id,
          nome_creator: auth.user,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Response:", response);
      if (response.status === 201) {
        setSuccess("Receita atualizada com sucesso!");
      }
    } catch (err) {
      setError("Erro ao atualizar a receita. Verifique os dados e tente novamente.");
      console.error("Erro:", err.response || err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  if (!recipe) {
    return <p className="text-center text-gray-500">Receita não encontrada.</p>;
  }

  return (
    <div className="flex flex-col flex-grow bg-[#F4EDE2]">
      <div className="flex justify-center items-center mt-10">
        <div
          className="bg-white shadow-md rounded-lg p-10 w-full max-w-3xl mx-auto"
          style={{ fontFamily: "Space Mono" }}
        >
          <h1 className="text-2xl font-bold font-serif text-center mb-6 text-[#3F2A17]">
            Atualizar Receita
          </h1>

          {/* Mensagens de erro ou sucesso */}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Título */}
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="title">
                Título:
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex.: Bolo de Cenoura"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
                required
              />
            </div>

            {/* Tempo médio de preparação */}
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="prepTime">
                Tempo médio de preparação (minutos):
              </label>
              <input
                type="number"
                id="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                placeholder="Ex.: 45"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
                required
              />
            </div>

            {/* Modo de Preparo */}
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="preparation">
                Modo de Preparo:
              </label>
              <textarea
                id="preparation"
                value={formData.preparation}
                onChange={handleChange}
                placeholder="Descreva o modo de preparo detalhadamente"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Botão Enviar */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="w-28 bg-[#3F2A17] text-white font-medium py-2 rounded-lg hover:bg-opacity-90 transition"
                disabled={loading}
              >
                {loading ? "Salvando..." : "Atualizar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditRecipe;