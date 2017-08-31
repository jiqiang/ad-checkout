import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import * as actions from './index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('app sync actions', () => {
  it('changeCustomer should create CHANGE_CUSTOMER action', () => {
    expect(actions.changeCustomer('acustomer')).toEqual({
      type: 'CHANGE_CUSTOMER',
      selectedCustomer: 'acustomer'
    })
  })

  it('updateCart should create UPDATE_CART action', () => {
    expect(actions.updateCart('anad', 10)).toEqual({
      type: 'UPDATE_CART',
      id: 'anad',
      qty: 10
    })
  })

  it('updateAds should create UPDATE_ADS action', () => {
    expect(actions.updateAds('anad', 10)).toEqual({
      type: 'UPDATE_ADS',
      id: 'anad',
      qty: 10
    })
  })

  it('receiveCustomers should create  RECEIVE_CUSTOMERS action', () => {
    let customers = [
      {id: 'customer_a_id', name: 'customer_a_name'},
      {id: 'customer_b_id', name: 'customer_b_name'}
    ]
    expect(actions.receiveCustomers(customers)).toEqual({
      type: 'RECEIVE_CUSTOMERS',
      customers
    })
  })

  it('receiveAds should create  RECEIVE_ADS action', () => {
    let ads = [
      {id: 'ad_a_id', name: 'ad_a_name', price: 20.22},
      {id: 'ad_b_id', name: 'ad_b_name', price: 22.33}
    ]
    expect(actions.receiveAds(ads)).toEqual({
      type: 'RECEIVE_ADS',
      ads
    })
  })

  it('receiveDiscounts should create  RECEIVE_DISCOUNTS action', () => {
    let discounts = [
      {
        customer: 'customer_a',
        ad: 'ad_a',
        rule: 'rule_a',
        params: [3],
        description: 'desc_a'
      },
      {
        customer: 'customer_b',
        ad: 'ad_b',
        rule: 'rule_b',
        params: [4],
        description: 'desc_b'
      }
    ]
    expect(actions.receiveDiscounts(discounts)).toEqual({
      type: 'RECEIVE_DISCOUNTS',
      discounts
    })
  })
})

describe('app async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('fetchData should dispatch correct actions', () => {
    const mockReply = {
      ads: [
        {
          id: 'ad_a_id',
          name: 'ad_a_name',
          price: 20.22
        },
        {
          id: 'ad_b_id',
          name: 'ad_b_name',
          price: 22.33
        }
      ],
      discounts: [
        {
          customer: 'customer_a',
          ad: 'ad_a',
          rule: 'rule_a',
          params: [3],
          description: 'desc_a'
        },
        {
          customer: 'customer_b',
          ad: 'ad_b',
          rule: 'rule_b',
          params: [4],
          description: 'desc_b'
        }
      ],
      customers: [
        {id: 'customer_a_id', name: 'customer_a_name'},
        {id: 'customer_b_id', name: 'customer_b_name'}
      ]
    }

    nock('http://localhost:3000')
      .get('/data/data.json')
      .reply(200, mockReply, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })

    const expectedReceiveAdsActions = {
      type: 'RECEIVE_ADS',
      ads: [
        {id: 'ad_a_id', name: 'ad_a_name', price: 20.22, qty: 0},
        {id: 'ad_b_id', name: 'ad_b_name', price: 22.33, qty: 0}
      ]
    }

    const store = mockStore({
      customers: [],
      ads: [],
      discounts: []
    })

    return store.dispatch(actions.fetchData()).then(() => {
      expect(store.getActions()).toContainEqual({
        type: 'RECEIVE_CUSTOMERS',
        customers: mockReply.customers
      })
      expect(store.getActions()).toContainEqual({
        type: 'RECEIVE_DISCOUNTS',
        discounts: mockReply.discounts
      })
      expect(store.getActions()).toContainEqual(expectedReceiveAdsActions)
    })
  })
})
