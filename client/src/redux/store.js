import { createStore , applyMiddleware, compose } from 'redux';
import pokemonReducer from './reducer/pokemonReducer';
import thunk from 'redux-thunk';









const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
  pokemonReducer,
  composeEnhancers(applyMiddleware(thunk))
  
  )

// const store = createStore(
//   gameReducer,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk),
//   composeEnhancers

// )




export default store;