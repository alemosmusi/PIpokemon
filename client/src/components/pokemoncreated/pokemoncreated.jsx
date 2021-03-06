import React, { useEffect, useState } from 'react';
import '../sideBar/sideBar.css';
import '../home/home.css';
import fondo from '../../assets/img/banner.png'
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemons, obtenerPokemonsCreated, obtenerTypes, ordenarPokemonsAZ, ordenarPokemonsFuerza } from "../../redux/actions/pokemonAction";
import Pokemons from "../pokemons/pokemons";
import filtrarG, { filtroChec } from "../../funciones/funciones";




export default function Pokemoncreados(){
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokeCreated)
    const [pagina, setPagina] = useState(0)
    const [AZ, setAZ] = useState("A-Z")
    const [FUERZA, setFUERZA] = useState("FUERZA-↧")
    const allTypes = useSelector((state) => state.arrayTypes)
    const [typesSelect, settypesSelect] = useState([])
    const eli = useSelector((state) => state.eli)




    useEffect(() => {
        dispatch(obtenerTypes())
        dispatch(obtenerPokemons())
        dispatch(obtenerPokemonsCreated())
    }, [eli])
    useEffect(() => {
        filterpokemon()
    }, [allPokemons,allTypes])

    
    const filterpokemon = () =>{
        
        var filtered = allPokemons
        

        if(typesSelect.length > 0){ filtered = filtrarG(filtered,typesSelect)}
        
        return filtered.slice(pagina, pagina + 12)
        
       
    }
    
      const nextPage = () => {
        setPagina(pagina + 12)
    }

    const prevPage = () => {
        if (pagina >= 12){
        setPagina(pagina - 12)}
    }


    
    const ordenarAZ = () => {
        if(AZ === "A-Z"){
            setAZ("Z-A")
            dispatch(ordenarPokemonsAZ(AZ))
        }else{
            setAZ("A-Z")
            dispatch(ordenarPokemonsAZ(AZ))
        }
    }

    const ordenarFUERZA = () => {
        if(FUERZA === "FUERZA-↧"){
            setFUERZA("FUERZA-↥")
            dispatch(ordenarPokemonsFuerza(FUERZA))
        }else{
            setFUERZA("FUERZA-↧")
            dispatch(ordenarPokemonsFuerza(FUERZA))
        }
    }



    const handleInputChange = function(e) { 
        if(!typesSelect.includes(e.target.value)){
        settypesSelect(
            [...typesSelect, e.target.value]
        )}
        
    }
    const clickType = function(e) { 
        settypesSelect(            
            typesSelect.filter((a) => e.target.value !== a)
        )
        
    }
    








if(allPokemons === "vacia"){
    return(
        <img className="sinfiltro" src="https://pa1.narvii.com/6461/2269b70c4c3a54f54b1b0d983840cb988c0068e8_hq.gif" alt=""></img>
    )
}


   
    return (
        
        <div className="home">
            <img className="fondo"
				src={fondo}
				alt='fondo'></img>
            <div id="sidebar">
            <h3>------ ORDENAR ------</h3>
                    <button className="btns" onClick={ordenarAZ}>{AZ}</button>
                    <button className="btns" onClick={ordenarFUERZA}>{FUERZA}</button>
                    <h3>------- FILTRAR -------</h3>
                <select name="selectipos" id="selectipos" onChange={handleInputChange}>
                    {allTypes.length>0? allTypes.map(c => <option key={c.name} value={c.name} >{c.name}</option> ):""}
                </select>
                {typesSelect.length>0? typesSelect.map(c => <div><button key={c} onClick={clickType}value={c} className="botontype">{c}</button><img src={`../${c}.png`} className="filtrotype"></img></div> ):""}
            
        
            </div>
            
            <div className="contenedor">
                <div>
                    {
                    allPokemons && allPokemons.length>0 ? <Pokemons pokes={filterpokemon()}></Pokemons>:""
                    }
                </div>
                {allPokemons && allPokemons.length>0 && filterpokemon().length === 0? <img className="sinfiltro" src="https://giffiles.alphacoders.com/140/14071.gif" alt=""></img>:""}
                <div>
                    {pagina >= 12 ? <button onClick={prevPage} className="btnsp">&lt;</button> : ""}
                    {11 < filterpokemon().length ? <button onClick={nextPage} className="btnsp">&gt;</button> : ""}
                </div>
            </div>

            
        
        </div>
    )
}



