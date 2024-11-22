import React, { useState } from "react";
import api from "../api/axios";

function AddRecipe() {
  const [formData, setFormData] = useState({
    title: "",
    prepTime: "",
    preparation: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

    try {
      const response = await api.post(
        "/receita/create",
        {
          nome: formData.title,
          modoDePeparo: formData.preparation,
          tempoDePreparo: parseInt(formData.prepTime, 10), // Converte para número inteiro
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Token JWT
          },
        }
      );

      if (response.status === 201) {
        setSuccess("Receita adicionada com sucesso!");
        // Limpar o formulário
        setFormData({
          title: "",
          prepTime: "",
          preparation: "",
        });
      }
    } catch (err) {
      setError("Erro ao adicionar a receita. Verifique os dados e tente novamente.");
      console.error("Erro:", err.response || err);
    }
  };

  return (
    <div className="flex flex-col flex-grow bg-[#F4EDE2]">
      <div className="flex justify-center items-center mt-10">
        <div
          className="bg-white shadow-md rounded-lg p-10 w-full max-w-3xl mx-auto"
          style={{ fontFamily: "Space Mono" }}
        >
          <h1 className="text-2xl font-bold font-serif text-center mb-6 text-[#3F2A17]">
            Adicionar Receita
          </h1>
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
                placeholder="Insira aqui o título da receita"
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
                placeholder="Insira aqui o tempo médio de preparo"
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
                placeholder="Insira aqui o modo de preparo"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Mensagens de erro ou sucesso */}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            {/* Botão Enviar */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="w-24 bg-[#3F2A17] text-white font-medium py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;