import React from 'react'
import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Model from './components/Model'

function App() {
  return (
    <>
     <Navbar/>

    <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route   path="/Details" component={Details}/>
      <Route   path="/Cart" component={Cart}/>
      <Route  component={Default}/>
    </Switch>
    <Model />
     
    </>
  );
}

export default App;
