import { createContext, useEffect, useState } from 'react';

export const PokemonContext = createContext();

function PokemonContextProvider({ children }) {
  const [currentPokemon, setCurrentPokemon] = useState(() => {
    return JSON.parse(localStorage.getItem('currentPokemon')) ?? '';
  });

  useEffect(() => {
    localStorage.setItem('currentPokemon', JSON.stringify(currentPokemon));
  }, [currentPokemon]);

  return (
    <PokemonContext.Provider value={{ currentPokemon, setCurrentPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContextProvider;
