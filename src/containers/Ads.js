import React from 'react'
import { connect } from 'react-redux'

import { updateCart } from '../actions'
import AdItemList from '../components/AdItemList'
import AdItem from '../components/AdItem'

const Ads = ({ ads, onUpdateAdItemQty }) => (
  <AdItemList>
    {ads.map(ad =>
      <AdItem 
        key={ad.id} 
        name={ad.name}
        onAdd={() => onUpdateAdItemQty(ad.id, 1)}
        onRemove={() => onUpdateAdItemQty(ad.id, -1)} />
    )}
  </AdItemList>
)

const mapStateToProps = state => ({
  ads: state.ads
})

const mapDispatchToProps = dispatch => ({
  onUpdateAdItemQty: (id, qty) => (
    dispatch(updateCart(id, qty))
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers)
