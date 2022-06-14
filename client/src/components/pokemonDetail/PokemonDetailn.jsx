import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { obtenerDetallen } from '../../redux/actions/pokemonAction';



export default function PokemonsDetailn() {
    
    // useParams usar este...
    const params = useParams()
    const dispatch = useDispatch()
    const pokeDetail = useSelector((state) => state.pokeDetailn)
    
    useEffect(() => {
        dispatch(obtenerDetallen(params.nombre))
        
      
      }, [])
      
    if(pokeDetail === "n"){
        return(
            <div className='gamedetail'>
                 error cagaste
             </div>
        )
        
    }else{
        return(
        
            <div className='gamedetail'>
                <img src={pokeDetail.img} alt="" />
            </div>
      
            
            
            
            
        )


    }
    

    
}