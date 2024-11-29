import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import UserMenu from "./UserMenu";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { auth } = useContext(AuthContext);
  const user = auth.user;

  return (
    <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <NavLink to="/home" className="flex items-center space-x-3">
        <img src={logo} alt="Culinaire" className="h-10" />
      </NavLink>
      <nav className="space-x-6">
        <NavLink
          to="/receitas"
          className={({ isActive }) =>
            isActive
              ? "text-[#3F2A17] border-b-2 border-[#3F2A17] text-lg font-medium transition-all duration-300"
              : "text-gray-600 hover:text-[#3F2A17] hover:border-b-2 hover:border-[#3F2A17] text-lg font-medium transition-all duration-300"
          }
        >
          Receitas
        </NavLink>
        {auth.token && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-[#3F2A17] border-b-2 border-[#3F2A17] text-lg font-medium transition-all duration-300"
                : "text-gray-600 hover:text-[#3F2A17] hover:border-b-2 hover:border-[#3F2A17] text-lg font-medium transition-all duration-300"
            }
          >
            Dashboard
          </NavLink>
        )}
      </nav>
      {auth.token && <UserMenu user={user} />}
      {!auth.token && (
        <NavLink
          to="/login"
          className="bg-[#3F2A17] hover:bg-[#332111] text-white py-2 px-5 rounded-full text-lg font-medium transition-colors duration-300"
        >
          Login
        </NavLink>
      )}
    </header>
  );
};

export default Header;