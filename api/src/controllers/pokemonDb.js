const axios = require("axios");
const { Pokemon , Tipo } = require('../db.js')

const pokemonDb = async () => {
    try {
        var contipe = []
        const createPoke = await Pokemon.findAll(
            {include: {
                model: Tipo
               }})
        console.log(createPoke[0].tipos[0].name);
        if(createPoke.length>0){
            for (let index = 0; index < createPoke.length; index++) {
                var tip = []
                if(createPoke[index].tipos.length>0){
                    for (let f = 0; f < createPoke[index].tipos.length; f++) {
                        tip.push(createPoke[index].tipos[f].name)
                        
                    }
                }
                var npoke = {
                    id: createPoke[index].id,
                    name: createPoke[index].name,
                    vida: createPoke[index].vida,
                    fuerza: createPoke[index].fuerza,
                    defensa: createPoke[index].defensa,
                    velocidad: createPoke[index].velocidad,
                    altura: createPoke[index].altura,
                    peso: createPoke[index].peso,
                    img: createPoke[index].img,
                    type: tip

                }
                contipe = contipe.concat(npoke)
                
            }
        }
               
        return contipe;
      } catch (error) {
        return "error"
        
      }
      


}


module.exports = {pokemonDb};