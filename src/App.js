import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Customer';
import AdItem from './AdItem';
import DiscountDetail from './DiscountDetail';
import Checkout from './Checkout';
import Resource from './Resource';
import _ from 'lodash';
import Cart from './Cart';

class App extends Component {

  constructor() {
    super();
    this.state = {
      customers: [],
      logged_in: "",
      cart: [],
      adPriceList: []
    };
    this.checkout = new Checkout();

    this.handleSelectCustomer = this.handleSelectCustomer.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleSelectCustomer(id) {
    let customer = _.find(this.state.customers, ["id", id]);
    this.checkout.setDiscountRules(customer.discounts);
    this.checkout.updateCart();
    
    let newState = Object.assign(
      {}, 
      this.state, 
      {
        logged_in: id,
        cart: this.checkout.getCart()
      }
    );
    this.setState(newState);
  }

  handleAddToCart(id) {
    this.checkout.add(id);
    this.updateAdPriceList();
  }

  handleRemoveFromCart(id) {
    this.checkout.remove(id);
    this.updateAdPriceList();
  }

  updateAdPriceList() {
    let newState = Object.assign(
      {}, 
      this.state,
      {
        adPriceList: this.checkout.getAdPriceList(),
        cart: this.checkout.getCart()
      }
    );
    this.setState(newState);
  }

  componentDidMount() {
    let resource = new Resource();
    resource.getData().then((data) => {
      
      let logged_in = "default";

      let customer = _.find(data.customers, ["id", logged_in]);
      this.checkout.setDiscountRules(customer.discounts);
      this.checkout.setAdPriceData(data.ads);
      this.checkout.initAdPriceList();
      
      this.setState({
        customers: data.customers,
        logged_in: logged_in,
        cart: this.checkout.getCart(),
        adPriceList: this.checkout.getAdPriceList()
      });
    });
  }

  render() {

    let customerListView = _.map(this.state.customers, (c) => {
      return (
        <Customer 
          key={c.id} 
          onClick={() => this.handleSelectCustomer(c.id)}
          customer={c} 
          checked={this.state.logged_in === c.id} />
      );
    });

    let adPriceListView = _.map(this.state.adPriceList, (ad) => {
      return (
        <AdItem
          key={ad.id} 
          ad={ad}
          onAddToCart={() => this.handleAddToCart(ad.id)}
          onRemoveFromCart={() => this.handleRemoveFromCart(ad.id)} />
      );
    });

    let customer = _.find(this.state.customers, ["id", this.state.logged_in]);
    let discountListView = "";
    if (customer) {
      discountListView = _.map(customer.discounts, (d) => {
        return (
          <DiscountDetail key={d.ad} desc={d.description} />
        );
      });
    }
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>{customerListView}</div>
        <div>{discountListView}</div>
        <div>{adPriceListView}</div>
        <div><Cart cart={this.state.cart} /></div>
      </div>
    );
  }
}

export default App;
