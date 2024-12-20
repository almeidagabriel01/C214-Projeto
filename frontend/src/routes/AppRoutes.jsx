import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from '../pages/Auth';
import RecipePage from '../pages/RecipePage';
import Dashboard from '../pages/DashboardPage';
import Home from '../pages/Home';
import MyRecipe from '../pages/MyRecipes';
import AddRecipe from '../pages/AddRecipe';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import Recipe from '../pages/Recipe';
import Edit from '../pages/EditRecipe';

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex">
          <Routes>
            {/* Redireciona a rota "/" para "/home" */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Define a rota de login */}
            <Route path="/login" element={<Auth />} />
            <Route path="/receitas" element={<RecipePage />} />
            <Route path="/receitas/:id" element={<Recipe />} />
            <Route path="/home" element={<Home />} />


            {/* Rotas Protegidas */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            
            <Route
              path="/minhas-receitas"
              element={
                <PrivateRoute>
                  <MyRecipe />
                </PrivateRoute>
              }
            />

            <Route
              path="/adicionar-receita"
              element={
                <PrivateRoute>
                  <AddRecipe />
                </PrivateRoute>
              }
            />

            <Route
              path="/editar-receita/:id"
              element={
                <PrivateRoute>
                  <Edit />
                </PrivateRoute>
              }
            />

            {/* Redireciona todas as rotas desconhecidas para "/home" */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;