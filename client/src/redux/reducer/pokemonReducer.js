import { SortAZ, SortFUERZA, SortFUERZAB, SortZA } from "../../funciones/funciones";
import { CREATE_POKEMON, ELIMINAR_UN_POKEMON, OBTENER_DETALLE, OBTENER_DETALLEN, OBTENER_POKEMONS, OBTENER_POKEMONS_CREATED, OBTENER_TYPES, ORDENAR_AZ, ORDENAR_FUERZA } from "../action-types/actionTypes";




const initialState = {
    arrayPokemons: [],
    arrayTypes:[],
    pokeDetail: [],
    pokeDetailn: {},
    pokeCreated: [],
    pokeCreado: [],

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
                        arrayPokemons : state.arrayPokemons.sort(SortAZ),
                        pokeCreated : state.pokeCreated.sort(SortAZ)
                    }
                }else{
                    return{
                        ...state,
                        arrayPokemons : state.arrayPokemons.sort(SortZA),
                        pokeCreated : state.pokeCreated.sort(SortZA)
                    }
                }
        case ORDENAR_FUERZA:
    
    
            if(action.payload === "FUERZA-↧"){
                return{
                    ...state,
                    arrayPokemons : state.arrayPokemons.sort(SortFUERZA),
                    pokeCreated : state.pokeCreated.sort(SortFUERZA)
                }
            }else{
                return{
                    ...state,
                    arrayPokemons : state.arrayPokemons.sort(SortFUERZAB),
                    pokeCreated : state.pokeCreated.sort(SortFUERZAB)
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
                pokeCreado: action.payload
                

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
        case "DEJARDEMOSTRAR":
            return{
                ...state,
                pokeDetail: []
            }
            
        
            
    
        default:
            return state
    }

}


export default pokemonReducer