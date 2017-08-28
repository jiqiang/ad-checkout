import React, { Component } from 'react'

import Customers from './containers/Customers'
import Ads from './containers/Ads'
import Cart from './containers/Cart'

class App extends Component {

  componentDidMount() {
    
  }
  
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
