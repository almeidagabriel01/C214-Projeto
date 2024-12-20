import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Jdenticon from "react-jdenticon";
import { AuthContext } from "../context/AuthContext";

const UserMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Jdenticon size="40" value={user} />
        </div>
        <span className="text-gray-800 font-medium">{user}</span>
        <svg
          className="w-4 h-4 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-full mt-0 w-48 bg-white border rounded-lg shadow-lg transition-opacity duration-300 z-50">
          <Link
            to="/minhas-receitas"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Ver Minhas Receitas
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;