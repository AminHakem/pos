import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
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
        <ProductList></ProductList>
        <Details />
        <Cart />
        <Default />
      </React.Fragment>

    );
  }
}
export default App;