import React, { useEffect } from 'react';
import Pokemon from "../pokemon/pokemon";
import './pokemons.css';


export default function Pokemons(a) {

    
  return (
    <div className='cards' >
      {a.pokes.map(c => <Pokemon
          key={c.id}
          id={c.id}
          name={c.name}
          altura={c.alutra}
          defensa={c.defensa}
          fuerza={c.fuerza}
          img={c.img}
          peso={a.peso}
          type={c.type}
          velocidad={c.velocidad}
          vida={a.vida}


        /> )}
    </div>
  );
}