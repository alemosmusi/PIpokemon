import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { dejardeMostrar, obtenerDetalle } from '../../redux/actions/pokemonAction';
import './pokemondetail.css';
import fondo from '../../assets/img/banner.png'
import pokedex from '../../assets/img/pokedexdetail.png'



export default function PokemonsDetail() {
    // useParams usar este...
    const params = useParams()
    const dispatch = useDispatch()
    const pokeDetail = useSelector((state) => state.pokeDetail)
    useEffect(() => {
        
        dispatch(obtenerDetalle(params.id))
        return () => {
          dispatch(dejardeMostrar())
        }
        
      
      }, [])
      if(pokeDetail.tipos){
        pokeDetail.type = pokeDetail.tipos.map((t) => t.name)
      }
      
    if(pokeDetail.length === 0){
      return(
        <img className="loadi" src="https://64.media.tumblr.com/5ec7748798a4304713864ee5a8f2a6e2/71846d6cf4d36a63-e6/s500x750/da57f3106573449cbdcdfe304c6c9ed669c9c013.gifv" alt="" />
      )
    }else if(pokeDetail === "ups algo ha sucedido mal"){
      return (
        <div className='gamedetail'>
        <img className="fondo"
				src={fondo}
				alt='fondo'></img>
        <img className="fondo pokedexd"
				src={pokedex}
				alt='fondo'></img>
        <img className="imagenderror" src="https://us.123rf.com/450wm/mwiederrecht/mwiederrecht1911/mwiederrecht191100076/134467723-patr%C3%B3n-sin-fisuras-de-la-pantalla-de-tv-de-mala-se%C3%B1al-de-ruido-est%C3%A1tico.jpg?ver=6" alt="" />
        <p className="errord">ERROR!!!</p>
      </div>
      )
    }

    return(
        
      <div className='gamedetail'>
        <img className="fondo"
				src={fondo}
				alt='fondo'></img>
        <img className="fondo pokedexd"
				src={pokedex}
				alt='fondo'></img>
        
        <p className="name">{pokeDetail.name}</p>
        <div className="typede">{pokeDetail.type.length>0? pokeDetail.type.map(c => <img key={c} src={`../../${c}.png`} className="typed"></img> ):""}</div>
        <p className="atribu">{pokeDetail.vida} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {pokeDetail.fuerza} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {pokeDetail.defensa} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {pokeDetail.velocidad}</p>
        <p className="atrib">HP &nbsp;&nbsp; ATK &nbsp;&nbsp; DEF &nbsp;&nbsp; VEL</p>
        <p className="alturad">ALTURA: {pokeDetail.altura}</p>
        <p className="pesod">PESO: {pokeDetail.peso}</p>

          <img className="imagend" src={pokeDetail.img} alt="" />
      </div>

      
      
      
      
  )

    
}