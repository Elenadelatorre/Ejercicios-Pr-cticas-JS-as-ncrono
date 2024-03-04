//https://pokeapi.co/api/v2/pokemon/

function pokemonRandom() {
  const randomPokemonId = Math.floor(Math.random() * 151) + 1;

  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' + randomPokemonId;

  fetch(pokemonUrl)
    .then((response) => response.json()) //Cuando la solicitud sea un éxito -> responde con un objeto JSON.
    .then((pokemon) => {
      const pokemonImgUrl = pokemon.sprites.front_default;

      const imgHTML = document.querySelector('.random-image');

      imgHTML.src = pokemonImgUrl;
    })
    .catch((error) => {
      console.log('Error al obtener datos de la API: ' + error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  pokemonRandom();
});
