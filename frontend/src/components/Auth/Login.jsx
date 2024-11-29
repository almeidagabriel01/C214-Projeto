import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from "../../api/axios"

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post(
        "/token",
        { username, password },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          transformRequest: (data) => {
            const params = new URLSearchParams();
            params.append("username", data.username);
            params.append("password", data.password);
            return params;
          },
        }
      );

      const { acess_token, id } = response.data;

      login(acess_token, username, id);

      navigate("/receitas");
    } catch (err) {
      console.error(err);
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center text-[#4b3028] mb-16">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-6">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-[#4b3028] outline-none pt-6 pb-1.5 transition-all placeholder-transparent cursor-text"
            placeholder="Username"
            required
          />
          <label
            htmlFor="username"
            className="absolute left-0 top-2 text-gray-400 text-base transition-all cursor-text peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4b3028]"
          >
            Username
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-[#4b3028] outline-none pt-6 pb-1.5 transition-all placeholder-transparent cursor-text"
            placeholder="Senha"
            required
          />
          <label
            htmlFor="password"
            className="absolute left-0 top-2 text-gray-400 text-base transition-all cursor-text peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4b3028]"
          >
            Senha
          </label>
        </div>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        {/* Botão Centralizado */}
        <div className="flex justify-center mt-12">
          <button
            type="submit"
            className="bg-[#4b3028] text-white py-2 rounded-full hover:bg-opacity-90 transition-all w-48 cursor-pointer"
          >
            Iniciar Sessão
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;