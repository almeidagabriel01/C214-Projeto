import React, { createContext, useState, useEffect } from 'react';

// Cria o contexto
export const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    user: null,
    id: null,
  });

  // Carrega os dados do localStorage ao iniciar
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const id = localStorage.getItem('id');
    if (token && user && id) {
      setAuth({ token, user, id });
    }
  }, []);

  // Função para realizar login
  const login = (token, user, id) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    localStorage.setItem("id", id);
    setAuth({ token, user, id });
  };

  // Função para realizar logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    setAuth({ token: null, user: null, id: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};