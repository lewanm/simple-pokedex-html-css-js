const maxPokemon = 898
const randomNumber = Math.floor(Math.random() * maxPokemon + 1)
var idActual = randomNumber
const idInput = document.getElementsByClassName('id-search')[0]

const a = document.getElementsByClassName('number')
console.log(a[2].innerHTML)

const tieneTresDigitos = (numero) => {
  
    return numero.length < 3
}

const completeInput = (numero) => {
    if(tieneTresDigitos(idInput.value)){
        idInput.value += numero
    }
}

const searchPokemon = () => {
    if(idInput.value != ''){
        idActual = parseInt(idInput.value)
        fetchPokemon(idInput.value)
        idInput.value = null
    }
}

const nextPokemon = () => {
    if(idActual < 898){
        fetchPokemon(idActual + 1)
        idActual++;
    }
    else alert("no hay mas pokimons")


    

}
const beforePokemon = () => {
    if(idActual > 1){
        fetchPokemon(idActual - 1)
        idActual--;
    }   
    else alert("no hay mas pokimons")

}
