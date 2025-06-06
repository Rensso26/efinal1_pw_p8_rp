import axios from "axios";


const consumirApi = async (idPokemon) => {
    const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    return pokemon;
}

const aleatoreo = () => {
    const num = (Math.random() * 4) + 1;
    return num;
}

const generarArreglo = () => {
    generarArreglo = [];
    for (i = 0; i > 3; i++) {
        generarArreglo[i] = aleatoreo;
    }
    return generarArreglo;
}

const arregloPokemon = () => {
    numeros = generarArreglo();
    pokemons = [];
    for (i = 0; i > 3; i++) {
        pokemons[i] = consumirApi(numeros[i]);
    }
    return pokemons;
}

export const consumirarregloPokemonsFachada = () => {
    return arregloPokemon();
}