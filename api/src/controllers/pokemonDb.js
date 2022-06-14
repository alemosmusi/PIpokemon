const axios = require("axios");
const { Pokemon , Tipo } = require('../db.js')

const pokemonDb = async () => {
    try {
        var contipe = []
        const createPoke = await Pokemon.findAll(
            {include: {
                model: Tipo
               }})
    
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
                    vida: parseInt(createPoke[index].vida),
                    fuerza: parseInt(createPoke[index].fuerza),
                    defensa: parseInt(createPoke[index].defensa),
                    velocidad: parseInt(createPoke[index].velocidad),
                    altura: parseInt(createPoke[index].altura),
                    peso: parseInt(createPoke[index].peso),
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