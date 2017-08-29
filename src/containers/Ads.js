import React from 'react'
import { connect } from 'react-redux'

import { updateAds, updateCart } from '../actions'
import AdItemList from '../components/AdItemList'
import AdItem from '../components/AdItem'

const Ads = ({ ads, onUpdateAdItemQty }) => (
  <AdItemList>
    {ads.map(ad =>
      <AdItem 
        key={ad.id} 
        name={ad.name}
        qty={ad.qty}
        price={ad.price}
        onAdd={() => onUpdateAdItemQty(ad.id, 1)}
        onRemove={() => onUpdateAdItemQty(ad.id, -1)} />
    )}
  </AdItemList>
)

export const mapStateToProps = state => ({
  ads: state.ads
})

export const mapDispatchToProps = dispatch => ({
  onUpdateAdItemQty: (id, qty) => {
    dispatch(updateAds(id, qty))
    dispatch(updateCart(id, qty))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ads)
