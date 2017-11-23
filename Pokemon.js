const pokemonList = document.getElementById('pokemons');

var offset = 0;


callPokemon();

document.getElementById("next").onclick = nextListener();

function callPokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset='+offset).then(response => {
    response.json().then(pokelist => {
      let html = '';
      for (const pokemon of pokelist.results) {
        html += `<li>${pokemon.name}</li>`
      }
  
      pokemonList.innerHTML = html;
      console.log(html);
    });
  });
}

function nextListener(){
  offset = offset + 20;
  callPokemon();
}