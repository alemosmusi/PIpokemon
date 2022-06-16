import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPoke, obtenerTypes } from '../../redux/actions/pokemonAction';
import "./createpokemon.css"



// {
//   "name": "sdsdfsdgf",
//   "vida": 23,
//   "fuerza":32,
//   "defensa":20,
//   "velocidad":1,
//   "altura": 3,
//   "peso":"44",
//   "img":"https://cdn-icons-png.flaticon.com/512/634/634741.png",
//   "types":["grass","water","bug"]
// }


export  function  CreatePokemon() {

    const allTypes = useSelector((state) => state.arrayTypes)
    const [typesSelect, settypesSelect] = useState([])
    const pokeCreated = useSelector((state) => state.pokeCreado)


  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(obtenerTypes())      
  
  }, [])

  const [input, setInput] = useState({
    name: "",
    vida: "",
    fuerza: "",
    defensa: '',
    velocidad: "",
    altura: "",
    peso: "",
    img: "",
    types: [],

  });
  const [errors, setErrors] = React.useState({
    name: "es necesario un nombre",
    vida: "es necesario la vida",
    fuerza: "es necesario la fuerza",
    defensa: "es necesario una defensa",
    velocidad: "es necesario un velocidad",
    altura: "es necesario una altura",
    peso: "es necesario un peso",
    img: "es necesario un imagen",
    types: "es necesario tipos",
  });

  const handleInputChange = function(e) { 
    setInput({
      ...input, 
      [e.target.name]: e.target.value 
    });

    setErrors(validate({
      ...input, 
      [e.target.name]: e.target.value
    }))
  }

  const validate= function(envi) {
    let errors = {};
    if (!envi.name) {errors.name = 'es necesario un nombre'}
    if (!envi.vida) {errors.vida = 'es necesario la vida'}
    if (isNaN(envi.vida) || envi.vida.includes(".") || envi.vida < 1) {errors.vida = 'la vida tiene que ser un numero entero'}
    if (isNaN(envi.fuerza) || envi.fuerza.includes(".") || envi.fuerza < 1 || envi.fuerza > 100) {errors.fuerza = 'la fuerza tiene que ser entre 1 y 100'}
    if (isNaN(envi.defensa) || envi.defensa.includes(".") || envi.defensa < 1 || envi.defensa > 100) {errors.defensa = 'la defensa tiene que ser entre 1 y 100'}
    if (isNaN(envi.velocidad) || envi.velocidad.includes(".") || envi.velocidad < 1 || envi.velocidad > 100) {errors.velocidad = 'la velocidad tiene que ser entre 1 y 100'}
    if (isNaN(envi.altura) || envi.altura.includes(".") || envi.altura < 1 ) {errors.altura = 'la altura tiene que ser un numero entero'}
    if (isNaN(envi.peso) || envi.peso.includes(".") || envi.peso < 1 ) {errors.peso = 'la peso tiene que ser un numero entero'}
    if (!envi.img.includes(".png") || !envi.img.includes("http") || !envi.img.includes(".com")) {
      errors.img = 'es necesario una foto de una web ej: https://cdn-icons-png.flaticon.com/512/634/634741.png';
    }
    if (envi.types.length < 1) {errors.types = 'es necesario tipos'}

    return errors;
  };

  const handleTypes = function(e) { 
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
useEffect(() => {
  setInput({
    ...input, 
    types : typesSelect 
  });
  setErrors(validate({
    ...input, 
    types: typesSelect
  }))

}, [typesSelect])



  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(createPoke(input))
  
  }

  const alnuevo = ()=>{
    pokeCreated.id = null
  }


  return (
    <div className='todo'>
      <div className='bodyy'>
      <div className="contain">

<div className="heading">CREE SU POKEMON</div>

  <form onSubmit={handleSubmit}>
    <div className='card-details'>
      <div className='card-box'>
        <span className='details'>Name:</span>
        <input className="text" type="text" name="name" placeholder='Name' onChange={handleInputChange} value={input.name} autoComplete="off"/>
          {errors.name && (
          <p className="danger">{errors.name}</p>
        )}
      </div>
      <div className='card-box'>
        <span className='details'>Vida:</span>
        <input className="text" type="text" name="vida" placeholder='Vida' onChange={handleInputChange} value={input.vida} autoComplete="off"/>
          {errors.vida && (
          <p className="danger">{errors.vida}</p>
        )}
      </div>
      <div className='card-box'>
        <span className='details'>Fuerza:</span>
        <input className="text" type="text" name="fuerza" placeholder='Fuerza' onChange={handleInputChange} value={input.fuerza} autoComplete="off"/>
          {errors.fuerza && (
          <p className="danger">{errors.fuerza}</p>
        )}
      </div>
      <div className='card-box'>
        <span className='details'>Defensa:</span>
        <input className="text" type="text" name="defensa" placeholder='Defensa' onChange={handleInputChange} value={input.defensa} autoComplete="off"/>
        {errors.defensa && (
        <p className="danger">{errors.defensa}</p>
      )}
      </div>
      <div className='card-box'>
        <span className='details'>Velocidad:</span>
        <input className="text" type="text" name="velocidad" placeholder='Velocidad' onChange={handleInputChange} value={input.velocidad} autoComplete="off"/>
          {errors.velocidad && (
          <p className="danger">{errors.velocidad}</p>
        )}
      </div>
      <div className='card-box'>
        <span className='details'>Peso:</span>
        <input className="text" type="text" name="peso" placeholder='Peso' onChange={handleInputChange} value={input.peso} autoComplete="off"/>
          {errors.peso && (
          <p className="danger">{errors.peso}</p>
        )}
      </div>
      <div className='card-box'>
        <span className='details'>Altura:</span>
        <input className="text" type="text" name="altura" placeholder='Altura' onChange={handleInputChange} value={input.altura} autoComplete="off"/>
        {errors.altura && (
        <p className="danger">{errors.altura}</p>
      )}
      </div>
      <div className='card-box'>
        <span className='details'>Imagen:</span>
        <input className="text" type="text" name="img" placeholder='Image' onChange={handleInputChange} value={input.img} />
        {errors.img && (
        <p className="danger">{errors.img}</p>
      )}
      </div>
      <div className='card-box'>
        <span className='details'>Tipos:</span>
          <select className="text" name="selectipos" id="selectipos" onChange={handleTypes}>
                    {allTypes.length>0? allTypes.map(c => <option key={c.name} value={c.name} >{c.name}</option> ):""}
                </select>
                <div className='category'>
                {typesSelect.length>0? typesSelect.map(c => <button className="bottype"  key={c} onClick={clickType}value={c}>{c}</button> ):""}
                </div>
                
                {errors.types && (
            <p className="danger">{errors.types}</p>
          )}
      </div>
    </div>
      {/* <div className='circal-form'>
        <span className='circal-title'>Tipos:</span>
          <select className="details" name="selectipos" id="selectipos" onChange={handleTypes}>
                    {allTypes.length>0? allTypes.map(c => <option key={c.name} value={c.name} >{c.name}</option> ):""}
                </select>
                <div className='category'>
                {typesSelect.length>0? typesSelect.map(c => <button  key={c} onClick={clickType}value={c}>{c}</button> ):""}
                </div>
                
                {errors.types && (
            <p className="danger">{errors.types}</p>
          )}
      </div> */}

        
        <div className="bbto">
        {pokeCreated.id?<Link to={`/home/pokemondetail/${pokeCreated.id}`} onClick={alnuevo}>
      <button className="botoncreado">se creo el pokemon {pokeCreated.name} anda a verlo</button>
</Link>:Object.values(errors)<1?<input  type="submit" name ="submit"  />:""}
        
        </div>
        
    </form>

{/* {pokeCreated.id?<Link to={`/home/pokemondetail/${pokeCreated.id}`} onClick={alnuevo}>
      <button className="botoncreado">se creo el pokemon {pokeCreated.name} anda a verlo</button>
</Link>:""} */}
{/* {1?<Link to={`/home/pokemondetail/${pokeCreated.id}`} onClick={alnuevo}>
      <button className="botoncreado">se creo el pokemon {pokeCreated.name} anda a verlo</button>
</Link>:""} */}







</div>
      </div>
    </div>
    
    
  )




 }



