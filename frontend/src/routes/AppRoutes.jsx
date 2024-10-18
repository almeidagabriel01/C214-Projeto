import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from '../pages/Auth';
import Inicio from '../pages/Inicial'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redireciona a rota "/" para "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Define a rota de login */}
        <Route path="/login" element={<Auth />} />

        {/* Define a rota para tela de inicio*/}
        <Route path="/inicio" element={<Inicio />}/>

      </Routes>
    </Router>
  );
};

export default AppRoutes;