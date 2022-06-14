import React, { Component,  useState } from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';
import pokedex from '../../assets/img/pokedex.png';


export default function Pokemon ({id, name, altura, defensa, fuerza, img, peso, type, velocidad, vida}) {
    
    
    return (
        <Link className='cardpoke' to={`/home/pokemondetail/${id}`}>
            <h3 className='card-title'>{name}</h3>
            <img className="image" src={img} alt="" />
            <img className="pokedex" src={pokedex} alt="" />
            <div className="type">{type.map(c => <img key={c} src= {`http://localhost:3000/${c}.png`} alt={c} className="imagentype"></img> )}</div>
        </Link>
    );
};

