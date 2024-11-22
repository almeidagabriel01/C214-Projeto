import React, { useState, useContext } from 'react';
import api from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await api.post('/register', {
        username,
        password,
      });
      if (response.status === 200) {
        setSuccess('Usuário cadastrado com sucesso!');
        const { token } = response.data;
        login(token, { username });
        navigate('/inicio');
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(err.response.data.detail || 'Erro ao cadastrar.');
      } else {
        setError('Erro de conexão. Tente novamente.');
      }
    }
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center text-[#4b3028] mb-12">
        Cadastro
      </h2>
      <form onSubmit={handleRegister}>
        <div className="relative mb-6">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 focus:border-[#4b3028] outline-none pt-6 pb-1.5 transition-all placeholder-transparent cursor-text"
            placeholder="Usuário"
            required
          />
          <label
            htmlFor="username"
            className="absolute left-0 top-2 text-gray-400 text-base transition-all cursor-text peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#4b3028]"
          >
            Usuário
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
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}

        <div className="flex justify-center mt-12">
          <button
            type="submit"
            className="bg-[#4b3028] text-white py-2 rounded-full hover:bg-opacity-90 transition-all w-48 cursor-pointer"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;