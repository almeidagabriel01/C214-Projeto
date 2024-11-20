import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ title, subtitle, image, link }) => {
  return (
    <Link
      to={link}
      className="flex flex-col bg-white shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300 w-[320px] h-[420px] rounded-lg"
    >
      {/* Seção da imagem ocupando a parte superior do card */}
      <div
        className="w-full h-2/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Seção de conteúdo ocupando o restante */}
      <div className="flex flex-col items-center justify-center p-4 bg-white">
        <h3 className="text-xl font-bold mb-2 font-serif text-gray-800">
          {title}
        </h3>
        <p className="text-center text-gray-600">{subtitle}</p>
      </div>
    </Link>
  );
};

export default DashboardCard;