import React, { Component } from 'react';

class Cart extends Component {
  render() {
    let cartView = this.props.cart.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.id}</span>
          <span>{item.price} * {item.qty} = {item.price * item.qty}</span>
        </div>
      );
    });

    // return cartView;
    return (<div>{cartView}</div>);
  }
}

export default Cart