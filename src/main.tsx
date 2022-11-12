import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/login'
import GlobalSytyle from '../src/styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
      <GlobalSytyle />
  </React.StrictMode>
)
