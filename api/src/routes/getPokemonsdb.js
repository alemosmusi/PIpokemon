const { Router } = require('express');

const router = Router();
const {pokemonDb} = require('../controllers/pokemonDb.js')





router.get('/', async(req, res) =>{
    res.status(200).json(await pokemonDb())
})





module.exports = router;