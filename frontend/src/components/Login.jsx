// src/components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login
    console.log('Login:', { email, password });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center text-[#4b3028] mb-16">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-[#4b3028] outline-none pt-6 pb-1.5 transition-all placeholder-transparent cursor-text"
            placeholder="E-mail"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-2 text-gray-400 text-base transition-all cursor-text peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4b3028]"
          >
            E-mail
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