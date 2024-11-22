import React, { useState } from "react";
import Jdenticon from "react-jdenticon";
import Modal from "../../components/Modal/DeleteCard";

const MyRecipeCard = ({ title, author, authorId }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(false);
    // Adicione a lógica para excluir a receita aqui
    console.log(`Excluindo a receita: ${title}`);
  };

  return (
    <>
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className="w-full h-64">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-3xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            &#x22EE; {/* Caractere dos três pontos verticais */}
          </button>

          {/* Menu de opções */}
          {showMenu && (
            <div className="absolute top-10 right-2 bg-white shadow-md border rounded-md w-32 z-10">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Editar
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => {
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

        {/* Ajustamos o gradiente para melhorar a visibilidade do título */}
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

      {/* Modal de confirmação */}
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
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleDelete}
              >
                Excluir
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MyRecipeCard;