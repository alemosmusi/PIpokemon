const { Router } = require('express');
const { Pokemon } = require('../db.js')

const router = Router();



router.delete('/', async (req, res) => {
  
    const  {id}  = req.query;
    try {
      const elim = await Pokemon.destroy({ where: { id: id } });
      res.status(201).json(elim)
    } catch (error) {
      res.status(400).json({error:error})
    }
    
  });






module.exports = router;