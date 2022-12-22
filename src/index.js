import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import PokemonContextProvider from './components/PokemonContext/PokemonContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>
);
