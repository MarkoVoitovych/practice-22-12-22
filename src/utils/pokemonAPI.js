function pokemonAPI() {
  const getAllPokemons = async () => {
    return await fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(data => data.results)
      .catch(err => alert(err.message));
  };
  const getOnePokemon = async value => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(res => res.json())
      .then(data => data)
      .catch(err => alert(err.message));
  };

  return {
    getAllPokemons,
    getOnePokemon,
  };
}

export default pokemonAPI;

// `https://pokeapi.co/api/v2/pokemon/`;
