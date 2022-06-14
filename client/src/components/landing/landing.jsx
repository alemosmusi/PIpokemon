import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import pikachuLanding from '../../assets/img/4167709.gif'
import { obtenerTypes } from "../../redux/actions/pokemonAction";
import './landing.css';



export default function Landing(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerTypes())      
      
      }, [])




    return (

        
        <div>
            <img className="pikachuLanding"
				src={pikachuLanding}
				alt='Pikachu landing'
			/>
                <Link to='/home' className="entrada">POKEMONS</Link>
            
            
        </div>
    )
}