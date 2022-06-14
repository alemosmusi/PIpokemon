import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import NavBar from './components/navbar/navbar';
import { Home } from './components/home/home';
import Pokemoncreados from './components/pokemoncreated/pokemoncreated.jsx';
import PokemonsDetail from './components/pokemonDetail/PokemonDetail';
import PokemonsDetailn from './components/pokemonDetail/PokemonDetailn';
import { CreatePokemon } from './components/createpokemon/createpokemon';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Landing></Landing>
      </Route>
      <Route path='/home'>
        <NavBar></NavBar>
      </Route>
      <Route exact path='/home'>
        <Home></Home>
      </Route>
      <Route exact path='/home/createpokemon'>
        <CreatePokemon></CreatePokemon>
      </Route>
      <Route exact path='/home/pokemon/:nombre'>
        <PokemonsDetailn></PokemonsDetailn>
      </Route>
      <Route exact path='/home/pokemondetail/:id'>
        <PokemonsDetail></PokemonsDetail>
      </Route>
      <Route exact path='/home/pokemonscreated'>
        <Pokemoncreados></Pokemoncreados>
      </Route>
    </div>
  );
}

export default App;
