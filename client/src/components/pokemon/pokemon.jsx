import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './pokemon.css';
import pokedex from '../../assets/img/pokedex.png';
import { eliminarPoke } from '../../redux/actions/pokemonAction';
import { useDispatch } from 'react-redux';


export default function Pokemon ({id, name, altura, defensa, fuerza, img, peso, type, velocidad, vida}) {
    let {pathname} = useLocation();
    const dispatch = useDispatch()
    



    var X = ""
    if(pathname.includes("pokemonscreated")){
        X = "X"
    }

    const eliminar = function(){
        dispatch(eliminarPoke(id))  
    
      }

      
    if(X === "X"){

        return(
            <div className='cardpoke'>  
            {X === "X"?<button className='x' onClick={eliminar}>X</button>:""}
            
            
            <Link to={`/home/pokemondetail/${id}`} className='card-title'>{name}</Link>
            <img className="image" src={img} alt="" />
            <img className="pokedex" src={pokedex} alt="" />
            <div className="type">{type.map(c => <img key={c} src= {`http://localhost:3000/${c}.png`} alt={c} className="imagentype"></img> )}</div>
        
            </div>
        )
        

    }
    return (
        <>  
            {X === "X"?<button className='x' onClick={eliminar}>X</button>:""}
            <Link className='cardpoke' to={`/home/pokemondetail/${id}`}>
            
            <h3 className='card-title'>{name}</h3>
            <img className="image" src={img} alt="" />
            <img className="pokedex" src={pokedex} alt="" />
            <div className="type">{type.map(c => <img key={c} src= {`http://localhost:3000/${c}.png`} alt={c} className="imagentype"></img> )}</div>
        </Link>
        </>
        
    );
};

