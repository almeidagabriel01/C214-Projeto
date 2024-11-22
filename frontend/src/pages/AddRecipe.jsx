import React, { useState } from "react";
import Header from "../components/Header";

function AddRecipe() {
  const [formData, setFormData] = useState({
    title: "",
    prepTime: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-api-endpoint.com/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Receita adicionada com sucesso!");
        console.log("Resultado:", result);
        // Limpar o formulário
        setFormData({
          title: "",
          prepTime: "",
          ingredients: "",
          preparation: "",
        });
      } else {
        alert("Erro ao adicionar a receita. Tente novamente.");
        console.error("Erro:", response.statusText);
      }
    } catch (error) {
      alert("Erro na conexão com a API.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="bg-[#F4EDE2] min-h-screen">
    <Header/>
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-3xl mx-auto" style={{ fontFamily: 'Space Mono' }}>
        <h1 className="text-2xl font-bold font-serif text-center mb-6 text-[#3F2A17]">Adicionar Receita</h1>
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
            />
          </div>

          {/* Tempo médio de preparação */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="prepTime">
              Tempo médio de preparação:
            </label>
            <input
              type="text"
              id="prepTime"
              value={formData.prepTime}
              onChange={handleChange}
              placeholder="Insira aqui o tempo médio de preparo"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Ingredientes */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="ingredients">
              Ingredientes:
            </label>
            <textarea
              id="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Insira aqui os ingredientes necessários da receita"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brown-500"
              rows="4"
            ></textarea>
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
            ></textarea>
          </div>

          {/* Botão Enviar */}
          <div className="text-center mt-4">
          <button
            type="submit"
            className="w-24 bg-[#3F2A17] text-white font-medium py-2 rounded-lg hover:bg-brown-700 transition"
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
