const { Router } = require('express');
const router = Router();
const {pokemonApi} = require('../controllers/pokemos.js')





router.get('/pokemons', async(req, res) =>{
    res.status(200).json(await pokemonApi())
})

module.exports = router;