import { useEffect, useState, useContext } from 'react';
import pokemonAPI from '../utils/pokemonAPI';
import Modal from './Modal/Modal';
import { PokemonContext } from './PokemonContext/PokemonContext';

export const App = () => {
  const { getAllPokemons, getOnePokemon } = pokemonAPI();

  const [pokemons, setPokemons] = useState([]);
  // const [currentPokemon, setCurrentPokemon] = useState('');
  const [url, setUrl] = useState('');

  const { currentPokemon, setCurrentPokemon } = useContext(PokemonContext);

  useEffect(() => {
    (async () => {
      const allPokemons = await getAllPokemons();
      setPokemons(allPokemons);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!currentPokemon) return;
    (async () => {
      const onePokemon = await getOnePokemon(currentPokemon);
      setUrl(onePokemon.sprites.front_default);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPokemon]);

  const handlePokemonChange = e => {
    if (e.target.value === 'All') {
      setCurrentPokemon('');
      return;
    }
    setCurrentPokemon(e.target.value);
  };

  const handleModalClose = e => {
    if (e.code === 'Escape') {
      setCurrentPokemon('');
    }
  };

  return (
    <>
      <select onChange={handlePokemonChange}>
        <option value="All">Choose pokemon</option>
        {pokemons.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
        )
      </select>
      {currentPokemon && <Modal url={url} onClose={handleModalClose} />}
    </>
  );
};
