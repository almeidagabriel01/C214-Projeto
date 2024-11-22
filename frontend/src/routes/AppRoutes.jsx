import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from '../pages/Auth';
import RecipePage from '../pages/RecipePage';
import Dashboard from '../pages/DashboardPage';
import Inicial from '../pages/Inicial';
import MyRecipe from '../pages/MyRecipes'
import AddRecipe from '../pages/AddRecipe'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redireciona a rota "/" para "/login" */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Define a rota de login */}
        <Route path="/login" element={<Auth />} />
        <Route path="/inicio" element={<RecipePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Inicial />} />
        <Route path="/minhas-receitas" element={<MyRecipe/>} />
        <Route path="/adicionar-receita" element={<AddRecipe/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;