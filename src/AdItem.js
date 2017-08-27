import React, { Component } from 'react';

class AdItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.ad.qty !== nextProps.ad.qty;
  }

  render() {
    return (
      <div>
        <div>
          {this.props.ad.name}
          <button disabled={this.props.ad.qty === 0} 
            onClick={() => this.props.onRemoveFromCart()}>
            -
          </button>

          <span>{this.props.ad.qty}</span>

          <button onClick={() => this.props.onAddToCart()}>
            +
          </button>
          
          <span>${this.props.ad.price}</span>
        </div>
      </div>
    )
  }
}

export default AdItem;