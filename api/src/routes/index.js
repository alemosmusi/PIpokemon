const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require('./getPokemons');
const getPokemonsdb = require('./getPokemonsdb');
const getTipos = require('./getTipos');
const deletePokemon = require('./deletePokemon');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', getPokemons);
router.use('/pokemonsdb', getPokemonsdb);
router.use('/types', getTipos);


router.use('/deletePoke', deletePokemon)



module.exports = router;
