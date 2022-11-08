const pokeApi = 'https://pokeapi.co/api/v2/pokemon/'
const MENSAJE_ERROR = 'pokemon invalido'

const fetchPokemon = (pokemon = '1') =>{

    if(pokemon[0] == '0'){
        pokemon = pokemon.slice(1)
    }
    const url = pokeApi + pokemon

    fetch(url).then((res) => {
        if(res.status != '200'){
            console.log(res)
            alert(MENSAJE_ERROR)
        }
        else{
            return res.json()
        }
    }).then((data) => {
        if(data){
            setImage(data);
            setInfo(data)
        }
    })

}

const setImage = (data) =>{
    const contenedor = document.getElementsByClassName('poke-marco')[0]
    contenedor.innerHTML = `<img class="poke-imagen" src="${data.sprites.front_default}" alt="">
    <p class="pokemon-id">#${data.id}</p>`
}

const setId = (id) =>{
    const contenedor = document.getElementsByClassName('poke-marco')[0]
    contenedor.innerHTML = ``
}

const getInfo = (data) =>{
    const nombre = capitalizeFirstLetter(data.name)
    const peso = data.weight / 10
    const altura = data.height / 10
    return `    <p class="nombre">${nombre}</p>
    <p class="altura">Altura: ${altura}m</p>
    <p class="peso">Peso: ${peso}kg</p>`
}

const setInfo = (data) =>{
    const info = document.getElementsByClassName('poke-info')[0]
    info.innerHTML = getInfo(data)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetchPokemon(idActual);