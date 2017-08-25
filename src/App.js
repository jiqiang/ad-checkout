import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Customer';
import AdItem from './AdItem';
import Resource from './Resource';

class App extends Component {

  constructor() {
    super()
    this.state = {
      ads: [],
      customers: [],
      logged_in: "",
      cart: []
    }
    this.handleSelectCustomer = this.handleSelectCustomer.bind(this);
  }

  handleSelectCustomer(id) {
    this.setState({logged_in: id});
  }

  componentDidMount() {
    let resource = new Resource();
    resource.getData().then((data) => {
      this.setState({
        customers: data.customers,
        ads: data.ads,
        logged_in: "default",
        cart: []
      })
    });
  }

  render() {

    const customerList = this.state.customers.map((c) => {
      return (
        <Customer 
          key={c.id} 
          onClick={() => this.handleSelectCustomer(c.id)}
          customer={c} checked={this.state.logged_in === c.id} />
      );
    });

    const adItemList = this.state.ads.map((ad) => {
      return (
        <AdItem key={ad.id} ad={ad} />
      );
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{customerList}</ul>
        <div>{adItemList}</div>
      </div>
    );
  }
}

export default App;
