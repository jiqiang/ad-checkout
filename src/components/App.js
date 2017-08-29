import React, { Component } from 'react'

import Customers from '../containers/Customers'
import Ads from '../containers/Ads'
import Cart from '../containers/Cart'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Customers />
        <hr />
        <Ads />
        <hr />
        <Cart />
      </div>
    );
  }
}

export default App;
