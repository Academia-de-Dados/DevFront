import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>           
    </AuthProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
