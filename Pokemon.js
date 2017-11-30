const pokemonList = document.getElementById('pokemons');

//global Variable:
var offset = 0;

//initial pokelist is created:
callPokemon();

//all listener for the buttons:
document.getElementById("next").onclick = nextListener;
document.getElementById("return").onclick = lastListener;
document.getElementById("details").onclick = detailsListener;

//the pokemon-list generator:
function callPokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset='+offset).then(response => {
    response.json().then(pokelist => {
      let html = '';

      //variable inside the function to not waste space:
      var pokeCount = offset;

      for (const pokemon of pokelist.results) {

        //pokeCount is climbing up for each pokemon, to always get the right value for each details-button:
        pokeCount++;
        html += `<li>${pokemon.name} </br>`
        html += `<button id="details" value=${pokeCount}>Details</button></li>`
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

function lastListener(){

  //the if is to stop the button working if it is the first page the user is on
  if(offset >= 20){
    offset = offset - 20;
    callPokemon();
  }
}

function detailsListener(){
  //tried to create a funktion to get the pokemon details:
  //the idea was to create the api-link like followed:
  //https://pokeapi.co/api/v2/pokemon/ + button-id
  //sadly it didn't work out and it was the only idea i got get the right pokemon
}