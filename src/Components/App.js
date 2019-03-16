import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import Navbar from './HeaderComponent/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>hello from app</h3>
      </React.Fragment>

    );
  }
}
export default App;