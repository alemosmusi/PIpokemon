import { useDispatch } from "react-redux";
import { CREATE_POKEMON, ELIMINAR_UN_POKEMON, OBTENER_DETALLE, OBTENER_DETALLEN, OBTENER_POKEMONS, OBTENER_POKEMONS_CREATED, OBTENER_TYPES, ORDENAR_AZ, ORDENAR_FUERZA } from "../action-types/actionTypes";
import axios from 'axios';



export function obtenerPokemons(){
    return function(dispacth){
        return axios.get('http://localhost:3001/pokemons')
        
            .then((pokemons) =>{
                dispacth({
                type: OBTENER_POKEMONS,
                payload: pokemons.data
            })
    })
    }
    
}

export function obtenerTypes(){
    return function(dispacth){
        return axios.get('http://localhost:3001/types')
        
            .then((types) =>{
                dispacth({
                type: OBTENER_TYPES,
                payload: types.data
            })
    })
    }
    
}
export function ordenarPokemonsAZ(AZ){
    return {
        
                type: ORDENAR_AZ,
                payload: AZ
                
    }
    
}


export function ordenarPokemonsFuerza(FUERZA){
    return {
        
                type: ORDENAR_FUERZA,
                payload: FUERZA
                
    }
    
}

export function obtenerPokemonsCreated(){
    return function(dispacth){
        return axios.get('http://localhost:3001/pokemonsdb')
        
        
            .then((pokemons) =>{
                dispacth({
                type: OBTENER_POKEMONS_CREATED,
                payload: pokemons.data
            })
    })
    }
    
}



export function obtenerDetalle(id){



    return function(dispacth){
        return axios.get(`http://localhost:3001/pokemons/${id}`)
            .then((pokedetail) =>{
                dispacth({
                    type: OBTENER_DETALLE,
                    payload: pokedetail.data
            })
    })
    }
    
           

}

export function obtenerDetallen(name){


    return function(dispacth){
        return axios.get(`http://localhost:3001/pokemons?name=${name}`)
            .then((pokedetail) =>{
                dispacth({
                    type: OBTENER_DETALLEN,
                    payload: pokedetail.data[0]
            })
    })
    }
    
           

}









export function createPoke(poke){

  
        return function(dispatch){
            return axios.post('http://localhost:3001/pokemons/', poke)
            .then((response) => {
                dispatch({
                    type: CREATE_POKEMON,
                    payload: response.data
                })
            })
        }
    

           

}

export function dejardeMostrar(){
    return {
        
                type: "DEJARDEMOSTRAR"
                
    }
    
}

export function eliminarPoke(id){
    return function(dispatch){
        
        return axios.delete(`http://localhost:3001/deletePoke?id=${id}`)
        .then((response) => {
            dispatch({
                type: ELIMINAR_UN_POKEMON,
                payload: response.data
            })
        })
    }

}