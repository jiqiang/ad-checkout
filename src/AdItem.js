import React, { Component } from 'react';

class AdItem extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.ad.name}
          <label>
            <input type="number" name={this.props.ad.id} />
          </label>
          <span>${this.props.ad.price}</span>
        </div>
      </div>
    )
  }
}

export default AdItem;