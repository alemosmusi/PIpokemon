const axios = require("axios");
const { Pokemon, Tipo } = require('../db.js');
const crearPokemon = async ({name, vida, fuerza, defensa, velocidad, altura, peso, img, types}) => {
    


    


    if(!img) img = 'https://cdn-icons-png.flaticon.com/512/634/634741.png'
    try{
    if(name&&vida&&fuerza&&defensa&&velocidad&&altura&&peso&&img&&types){
        if(Array.isArray(types)){
            var tipo = await Promise.all(types.map(async tipos => await Tipo.findAll({where:{name: tipos}})))
            tipo = tipo.flat();
        }else{
            var [tipo, creada] = await Tipo.findOrCreate({where:{name: types}})
        }
        let pokemon = await Pokemon.create({
            name: name.toLowerCase(), 
            vida, 
            fuerza, 
            defensa, 
            velocidad, 
            altura, 
            peso, 
            img
        })
        await pokemon.setTipos(tipo);
        return pokemon;
    }
    }catch(e){
        return 'ups algo ha sucedido mal';
    }


}


module.exports = {crearPokemon};