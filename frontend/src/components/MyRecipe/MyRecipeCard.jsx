import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Jdenticon from "react-jdenticon";
import Modal from "../../components/Modal/DeleteCard";
import api from "../../api/axios";

const MyRecipeCard = ({ title, author, authorId, id, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editar-receita/${id}`);
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/receita/cursos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowModal(false);
      if (onDelete) {
        onDelete(id);
      }
    } catch (err) {
      console.error("Erro ao excluir receita:", err.response || err);
      alert("Erro ao excluir a receita. Tente novamente.");
    } finally {
      setDeleting(false);
    }
  };

  const handleViewRecipe = () => {
    navigate(`/receitas/${id}`);
  };

  return (
    <>
      <div
        className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={handleViewRecipe} // Redireciona ao clicar na receita
      >
        <div className="w-full h-64">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-3xl"
            onClick={(e) => {
              e.stopPropagation(); // Impede a propagação do evento para evitar redirecionamento
              setShowMenu(!showMenu);
            }}
          >
            &#x22EE;
          </button>

          {showMenu && (
            <div className="absolute top-10 right-2 bg-white shadow-md border rounded-md w-32 z-10">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation(); // Impede a propagação do evento
                  handleEdit();
                }}
              >
                Editar
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation(); // Impede a propagação do evento
                  setShowMenu(false);
                  setShowModal(true);
                }}
              >
                Excluir
              </button>
            </div>
          )}

          <Jdenticon value={title} style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
          <h3 className="text-2xl font-bold" style={{ fontFamily: "Roboto, sans-serif" }}>
            {title}
          </h3>
          <div className="flex items-center mt-2">
            <Jdenticon size="32" value={authorId} />
            <span className="text-sm ml-3">{author}</span>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal>
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h3 className="text-lg font-bold mb-4">Confirmar Exclusão</h3>
            <p className="text-gray-700 mb-6">
              Você tem certeza que deseja excluir <strong>{title}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={(e) => {
                  e.stopPropagation(); // Impede a propagação do evento
                  setShowModal(false);
                }}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={(e) => {
                  e.stopPropagation(); // Impede a propagação do evento
                  handleDelete();
                }}
                disabled={deleting}
              >
                {deleting ? "Excluindo..." : "Excluir"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MyRecipeCard;