import { SortAZ, SortFUERZA, SortFUERZAB, SortZA } from "../../funciones/funciones";
import { CREATE_POKEMON, ELIMINAR_UN_POKEMON, OBTENER_DETALLE, OBTENER_DETALLEN, OBTENER_POKEMONS, OBTENER_POKEMONS_CREATED, OBTENER_TYPES, ORDENAR_AZ, ORDENAR_FUERZA } from "../action-types/actionTypes";



var ab = 1


const initialState = {
    arrayPokemons: [],
    arrayTypes:[],
    pokeDetail: [],
    pokeDetailn: {},
    pokeCreated: [],
    eli: [],

}


const pokemonReducer = (state = initialState, action) => {

    switch (action.type) {
        case OBTENER_POKEMONS:
            
            return{
                ...state,
                arrayPokemons: action.payload,
                
            }
        case OBTENER_TYPES:
        
            return{
                ...state,
                arrayTypes: action.payload,
                
            }

        
        case ORDENAR_AZ:
            
            
                if(action.payload === "A-Z"){
                    return{
                        ...state,
                        arrayPokemons : state.arrayPokemons.sort(SortAZ)
                    }
                }else{
                    return{
                        ...state,
                        arrayPokemons : state.arrayPokemons.sort(SortZA)
                    }
                }
        case ORDENAR_FUERZA:
    
    
            if(action.payload === "FUERZA-↧"){
                return{
                    ...state,
                    arrayPokemons : state.arrayPokemons.sort(SortFUERZA)
                }
            }else{
                return{
                    ...state,
                    arrayPokemons : state.arrayPokemons.sort(SortFUERZAB)
                }
            }
            
        case OBTENER_DETALLE:
            return{
                ...state,
                pokeDetail: action.payload
            }
        
        case OBTENER_DETALLEN:
            return{
                ...state,
                pokeDetailn: action.payload
            }

        case CREATE_POKEMON:
            return{
                ...state,
                pokeCreated: action.payload
                

            }
        case OBTENER_POKEMONS_CREATED:
            if(action.payload.length){
                return{
                    ...state,
                    pokeCreated: action.payload,
                    
                }
            }else{
                return{
                    ...state,
                    pokeCreated: "vacia"
                    
                }
            }
            
        
        // case ELIMINAR_UN_GAME:
            
        //     return {
        //         ...state,
        //         eli: ab++
            
        //     }
            
    
        default:
            return state
    }

}


export default pokemonReducer