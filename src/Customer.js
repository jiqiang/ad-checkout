import React, { Component } from 'react';

class Customer extends Component {
  render() {
    return (
      <li>
        <label>
          <input
            readOnly 
            type="radio" 
            value={this.props.customer.id} 
            checked={this.props.checked}
            onClick={() => this.props.onClick()}
            name="customers" /> 
          {this.props.customer.name}
        </label>
      </li>
    );    
  }
}

export default Customer;