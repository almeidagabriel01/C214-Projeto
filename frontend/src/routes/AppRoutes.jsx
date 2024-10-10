import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from '../pages/Auth';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redireciona a rota "/" para "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Define a rota de login */}
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;