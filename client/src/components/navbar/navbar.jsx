import { Link } from "react-router-dom";
import './navBar.css';



export default function NavBar(){
    return (
        
        <div className="container">
            <div className="navbar">
                <ul>
                    <li><Link to='/home'>HOME</Link></li>
                    <li className="der"><Link to='/home/createpokemon'>CREAR POKEMON</Link></li>
                    <li className="der"><Link to='/home/pokemonscreated'>POKEMONES</Link></li>
                </ul>
            </div>
            
        </div>
    )
}