import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth.token !== null) {
      setLoading(false);
    }
  }, [auth]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return auth.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;