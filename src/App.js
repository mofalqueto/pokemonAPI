import React, { useState } from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState('');

  const loadAPI = (name) => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPokemon(json);
        })
        .catch((err) => console.log(err));
    } else {
      setPokemon({}); // Limpa os dados do Pokémon quando nenhum nome está definido
    }
  };


  
  const handleSearch = () => {
    loadAPI(pokemonName);
  };

  return (
  
    <div class="container">
      <br/>
      <input
        type="text"
        placeholder="Digite o nome do Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      /> <button class="button" onClick={handleSearch}>Pesquisar</button>

      <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
      <div>Name: {pokemon?.name}</div>
      <div>Nº {pokemon?.id}</div>
      <div>Peso: {pokemon?.weight / 10}kg</div>
      <div>Altura: {pokemon?.height / 10}m</div>
      <div>Experiência: {pokemon?.base_experience}</div>
    </div>
  );
}

export default App;


