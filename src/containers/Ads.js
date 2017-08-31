import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateAds, updateCart } from '../actions'
import AdItemList from '../components/AdItemList'
import AdItem from '../components/AdItem'

export class Ads extends React.Component {
  render() {
    return (
      <AdItemList>
        {this.props.ads.map(ad =>
          <AdItem
            key={ad.id}
            name={ad.name}
            qty={ad.qty}
            price={ad.price}
            onAdd={() => this.props.onUpdateAdItemQty(ad.id, 1)}
            onRemove={() => this.props.onUpdateAdItemQty(ad.id, -1)} />
        )}
      </AdItemList>
    )
  }
}

Ads.propTypes = {
  ads: PropTypes.array.isRequired,
  onUpdateAdItemQty: PropTypes.func
}
Ads.defaultProps = {
  ads: []
}

export function mapStateToProps(state) {
  return {
    ads: state.ads
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateAdItemQty: (id, qty) => {
      dispatch(updateAds(id, qty))
      dispatch(updateCart(id, qty))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ads)
