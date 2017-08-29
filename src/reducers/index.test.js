import { cart, customers, ads, discounts, selectedCustomer } from './index'

describe('app reducers', () => {
  it('cart should add an item', () => {
    let expected = [{id: 'classic', qty: 1}]
    let received = cart([], {
      type: 'UPDATE_CART',
      id: 'classic',
      qty: 1
    })
    expect(received).toEqual(expected)
  })

  it('cart should update an item', () => {
    let expected = [{id: 'classic', qty: 2}]
    let received = cart([{id: 'classic', qty: 1}], {
      type: 'UPDATE_CART',
      id: 'classic',
      qty: 1
    })
    expect(received).toEqual(expected)
  })

  it('customers should handle RECEIVE_CUSTOMERS action', () => {
    let expected = [
      { id: 'customer_a_id', name: 'customer_a_name' },
      { id: 'customer_b_id', name: 'customer_b_name' }
    ]
    let received = customers([], {
      type: 'RECEIVE_CUSTOMERS',
      customers: expected
    })
    expect(received).toEqual(expected)
  })

  it('ads should handle RECEIVE_ADS action', () => {
    let expected = [
      { id: 'ad_a_id', name: 'ad_a_name', price: 20.22, qty: 0 },
      { id: 'ad_b_id', name: 'ad_b_name', price: 22.33, qty: 0 }
    ]
    let received = ads([], {
      type: 'RECEIVE_ADS',
      ads: expected
    })
    expect(received).toEqual(expected)
  })

  it('ads should handle UPDATE_ADS action', () => {
    let expected = [
      { id: 'ad_a_id', name: 'ad_a_name', price: 20.22, qty: 1 },
      { id: 'ad_b_id', name: 'ad_b_name', price: 22.33, qty: 1 }
    ]
    let received = ads([
      { id: 'ad_a_id', name: 'ad_a_name', price: 20.22, qty: 1 },
      { id: 'ad_b_id', name: 'ad_b_name', price: 22.33, qty: 2 }
    ], {
      type: 'UPDATE_ADS',
      id: 'ad_b_id',
      qty: -1
    })
    expect(received).toEqual(expected)
  })

  it('discounts should handle RECEIVE_DISCOUNTS action', () => {
    let expected = [
      { customer: 'customer_a', ad: 'ad_a', rule: 'rule_a', params: [3], description: 'desc_a' },
      { customer: 'customer_b', ad: 'ad_b', rule: 'rule_b', params: [4], description: 'desc_b' }
    ]
    let received = discounts([], {
      type: 'RECEIVE_DISCOUNTS',
      discounts: expected
    })
    expect(received).toEqual(expected)
  })

  it('selectedCustomer should hanlde CHANGE_CUSTOMER action', () => {
    expect(selectedCustomer('default', {
      type: 'CHANGE_CUSTOMER',
      selectedCustomer: 'glenn'
    })).toEqual('glenn')
  })

})