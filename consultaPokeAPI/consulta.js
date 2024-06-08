const URL = "https://pokeapi.co/api/v2/pokemon/";
const listaPokemon = document.querySelector('.listaPokemon');
const pokedex = document.querySelector('.pokedex');
const pantalla = document.querySelector('.pantalla');
const informacion = document.querySelector('.informacion');
const pokeName = document.getElementById('pokemon');

/*
 listaPokemon.addEventListener('click', () => {
    if(pokeName.value !== ''){
        for(let i = 1; i<= 151; i++){
            fetch(URL + i)
                .then((response) => response.json())
                .then(data => verificaPokemon(data))
        }
    }else{
        return console.log("name vacio");
    }
    
    
})
*/

async function buscarPokemon(){
    try {
        if(pokeName.value !== ''){
        //await console.log("no error");
        for(let i = 1; i<= 151; i++){
            await fetch(URL + i)
                .then((response) => response.json())
                .then(data => {
                    if(pokeName.value == data.name){
                    console.log("Elpokemon es: ", data);
                    Mostrar(data);
                    i = 151;
                    return i;
                }else{
                   // console.log("pokemon no encontrado");
                    return false;
                }
            })
                
        }
    }
    }
    catch{
        alert("Pokemon no encontrado");
    }
}

function Mostrar(pokemon) {
    // Create the image element
    const img = document.createElement("img");
  
    // Check if there's an existing 'imagenActual' element
    const existingImg = document.querySelector('.pantalla .imagenActual');
    const existingInfo = document.querySelector('.informacion .infoText');
    // If an existing 'imagenActual' element is found, remove it
    if (existingImg && existingInfo) {
      existingImg.parentNode.removeChild(existingImg);
      existingInfo.parentNode.removeChild(existingInfo);
    }
  
    // Add the 'imagenActual' class to the new image
    img.classList.add('imagenActual');
  
    // Set the image source and append it to the 'pantalla' div
    img.src = pokemon.sprites.front_default;
    document.querySelector('.pantalla').append(img);
  
    // Create the information div
    const div = document.createElement("div");
    div.classList.add("infoText");
    div.innerHTML = `
      <p>Nombre: ${pokemon.species.name}</p>
      <p>Altura: ${pokemon.height} metros</p>
      <p>Peso : ${pokemon.weight} kg</p>
      <p>Puntos de vida base : ${pokemon.base_experience}</p>
    `;
  informacion.append(div);
  }
  
/*
function verificaPokemon(data){
    if(pokeName.value == data.name){
        console.log("Elpokemon es: ", data);
        verdad = true;
        Mostrar(data);
        return verdad;
    }else{
        console.log("pokemon no encontrado");
        return false;
    }

} */