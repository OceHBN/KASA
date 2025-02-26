import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './App.jsx';

// Récupère l'élément root du DOM
const rootElement = document.getElementById('root');

// Crée une racine React et rend l'application
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);