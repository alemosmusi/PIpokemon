const axios = require("axios");
const { Router } = require('express');
const { crearPokemon } = require('../controllers/createPokemon.js');
const { pokemonDb } = require("../controllers/pokemonDb.js");
const router = Router();
const {pokemonApi} = require('../controllers/pokemonsApi.js')
const { Pokemon , Tipo } = require('../db.js')


















router.get('/', async (req, res)=>{
    const { name } = req.query;
    function objectPokemon(pokemon){
        return {
                id: pokemon.data.id,
                name : pokemon.data.name,
                vida : pokemon.data.stats[0].base_stat,
                fuerza : pokemon.data.stats[1].base_stat,
                defensa :pokemon.data.stats[2].base_stat,
                velocidad : pokemon.data.stats[5].base_stat,
                altura :pokemon.data.height,
                peso :pokemon.data.weight,
                img : pokemon.data.sprites.other['dream_world'].front_default,
                type : pokemon.data.types.map(tipo => tipo.type.name),
                }
    }
    
    if(name){
      
    try{
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        let pokemonBd = await Pokemon.findAll({where:{name: name.toLowerCase()},include: {
            model: Tipo,
           }})
        if(pokemon.data && pokemonBd.length > 0) return res.json([objectPokemon(pokemon)].concat(pokemonBd))
        if(pokemonBd.length > 0) return res.json(pokemonBd);
        if(pokemon.data) return res.json([objectPokemon(pokemon)]);
    }catch(e){
        let pokemonBd = await Pokemon.findAll({where:{name: name.toLowerCase()},include: {
            model: Tipo,
           }})
           if(pokemonBd.length > 0)return res.json(pokemonBd);
           else return res.send('nombre no encontrado');
    }
        
    }else{
        
        // let pokemones =  []
        let pokemones =  await pokemonDb();
        if(pokemones === "error"){
            res.json(await pokemonApi());
        }else{
            pokemones = pokemones.concat( await pokemonApi());
            res.json(pokemones);  
        }
         
    }
  
})






















// router.get('/', async(req, res) =>{
//     res.status(200).json(await pokemonApi())
// })

router.get('/:id', async(req, res) =>{


    function objectPokemon(pokemon){
        return {
                id: pokemon.data.id,
                name : pokemon.data.name,
                vida : pokemon.data.stats[0].base_stat,
                fuerza : pokemon.data.stats[1].base_stat,
                defensa :pokemon.data.stats[2].base_stat,
                velocidad : pokemon.data.stats[5].base_stat,
                altura :pokemon.data.height,
                peso :pokemon.data.weight,
                img : pokemon.data.sprites.other['dream_world'].front_default,
                type : pokemon.data.types.map(tipo => tipo.type.name),
                }
    }



    const { id } = req.params;
    try{
    if(id){
        let idInt = Number(id);
        if(Number.isInteger(idInt)){
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            if(pokemon.data) return res.json(objectPokemon(pokemon));
        }else{
            let pokemon = await Pokemon.findByPk(id,{include: {
                model: Tipo,
               }})
            if(pokemon) return res.json(pokemon)
        }
       
        return res.status(404).json('EL ID INGRESADO NO COINCIDE CON NINGUN POKEMON')
    }
    }catch(e){
         return res.status(400).json('ups algo ha sucedido mal');
    }
})

router.post('/', async (req, res) =>{
    const poke = req.body
    res.status(200).json(await crearPokemon(poke))
})





module.exports = router;