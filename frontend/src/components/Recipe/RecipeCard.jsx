import React from "react";
import { useNavigate } from "react-router-dom";
import Jdenticon from "react-jdenticon";

const RecipeCard = ({ id, title, author }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/receitas/${id}`);
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full h-64">
        <Jdenticon value={title} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-center mt-2">
          <Jdenticon size="32" value={author} />
          <span className="text-sm ml-3">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;