import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Customers from '../containers/Customers'
import Ads from '../containers/Ads'
import Cart from '../containers/Cart'

describe('test App', () => {
  it('App should render properly', () =>{
    const app = shallow(<App />)
    const test = [
      {
        customers: <Customers />,
        ads: <Ads />,
        cart: <Cart />
      }
    ]
    test.forEach(t => {
      expect(app.contains(t.customers)).toEqual(true)
      expect(app.contains(t.ads)).toEqual(true)
      expect(app.contains(t.cart)).toEqual(true)
    })
  })
})
