import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from '../pages/Auth';
import RecipePage from '../pages/RecipePage';
import Dashboard from '../pages/DashboardPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redireciona a rota "/" para "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Define a rota de login */}
        <Route path="/login" element={<Auth />} />
        <Route path="/inicio" element={<RecipePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;