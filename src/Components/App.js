import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage';
import Navbar from './HeaderComponent/Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Default from './Default';
import Cart from './Cart';

import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/cart' component={Cart} />
          <Route path='/details' component={Details} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>

    );
  }
}
export default App;