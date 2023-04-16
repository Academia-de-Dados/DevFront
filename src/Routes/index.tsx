import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProtectedLayout from './routes';

import Login from '../components/Login';
import Home from '../components/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/Home"
        element={
          <ProtectedLayout>
            <Home />
          </ProtectedLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
