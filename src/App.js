import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import NavBar from './components/NavBar'
import { PokeProvider } from './context/PokeContext';
import PokeCard from './components/PokeCard'
import NotFound from './components/NotFound'
import Footer from './components/Footer';

function App() {
  return (
    <PokeProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pokedex' component={Pokedex} />
            <Route exact path='/pokecard/:name' component={PokeCard} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </PokeProvider>
  );
}

export default App;
