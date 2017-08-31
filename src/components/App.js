import React from 'react'

import Customers from '../containers/Customers'
import Ads from '../containers/Ads'
import Cart from '../containers/Cart'

import './App.css'

function App() {
  return (
    <div className="App">
      <Customers />
      <hr />
      <Ads />
      <hr />
      <Cart />
    </div>
  )
}

export default App;
