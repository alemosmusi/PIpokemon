const axios = require("axios");
const { Pokemon, Tipo } = require('../db.js');

const pokemonTypes = async () => {
    

    try{
        let types = await Tipo.findAll();
        if(types.length > 0) return types;
        let typesApi = await axios.get('https://pokeapi.co/api/v2/type');
        typesApi = await Promise.all(typesApi.data.results.map(async (tipo) => {
             let tipe = await Tipo.create({name:tipo.name})
             return tipe;
        }));
        return typesApi;
        }catch(e){
            return 'ups algo ha sucedido mal';
        }


}


module.exports = {pokemonTypes};