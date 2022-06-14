import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { obtenerDetalle } from '../../redux/actions/pokemonAction';



export default function PokemonsDetail() {
    // useParams usar este...
    const params = useParams()
    const dispatch = useDispatch()
    const pokeDetail = useSelector((state) => state.pokeDetail)
    useEffect(() => {
        dispatch(obtenerDetalle(params.id))
        
      
      }, [])
    

    return(
        
      <div className='gamedetail'>
          <img src={pokeDetail.img} alt="" />
      </div>

      
      
      
      
  )

    
}