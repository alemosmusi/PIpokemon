const axios = require("axios");

const pokemonApi = async () => {
    

try{
    // let PokemonsApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
    
    let PokemonsApi = await axios.get('https://pokeapi.co/api/v2/pokemon');
    let pokemones = PokemonsApi.data.results
    pokemones = await Promise.allSettled(pokemones.map (async (pokemon) =>{
        let dataPokemon = await axios.get(`${pokemon.url}`);
        let imgPokemon = dataPokemon.data.sprites.other['dream_world'].front_default
        return {
            id: pokemon.url.split('/')[6],
            name : pokemon.name,
            vida : dataPokemon.data.stats[0].base_stat,
            fuerza : dataPokemon.data.stats[1].base_stat,
            defensa :dataPokemon.data.stats[2].base_stat,
            velocidad :dataPokemon.data.stats[5].base_stat,
            altura :dataPokemon.data.height,
            peso :dataPokemon.data.weight,
            img : imgPokemon,
            type :dataPokemon.data.types.map(tipo => tipo.type.name),
        }
    })
    )

    let PokemonsApi2 = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
    let pokemones2 = PokemonsApi2.data.results
    pokemones2 = await Promise.allSettled(pokemones2.map (async (pokemon) =>{
        let dataPokemon = await axios.get(`${pokemon.url}`);
        let imgPokemon = dataPokemon.data.sprites.other['dream_world'].front_default
        return {
            id: pokemon.url.split('/')[6],
            name : pokemon.name,
            vida : dataPokemon.data.stats[0].base_stat,
            fuerza : dataPokemon.data.stats[1].base_stat,
            defensa :dataPokemon.data.stats[2].base_stat,
            velocidad :dataPokemon.data.stats[5].base_stat,
            altura :dataPokemon.data.height,
            peso :dataPokemon.data.weight,
            img : imgPokemon,
            type :dataPokemon.data.types.map(tipo => tipo.type.name),
        }
    })
    )
    pokemones = pokemones.concat(pokemones2)
    const list2 = pokemones.filter((l) => l.status === "fulfilled")
    return list2.map(l => l.value);
    }catch(e){
        console.error(e);
    }






}


module.exports = {pokemonApi};