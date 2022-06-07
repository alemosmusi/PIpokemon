const { Router } = require('express');
const router = Router();
const { pokemonTypes } = require('../controllers/types.js');




router.get('/', async(req,res) =>{
    res.status(200).json(await pokemonTypes())
    
})

module.exports = router;