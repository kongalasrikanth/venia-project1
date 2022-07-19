import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


class App extends Component {
  render() {
    
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route  exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
