import Discount from './Discount'

describe('test Discount', () => {
  it('pay_less_quantities should work properly', () => {    
    let tests = [
      {
        expected: 20,
        id: 'classic',
        qty: 3,
        price: 10,
        triggerQty: 3,
        discountedQty: 2
      },
      {
        expected: 20,
        id: 'classic',
        qty: 2,
        price: 10,
        triggerQty: 3,
        discountedQty: 2
      },
      {
        expected: 30,
        id: 'classic',
        qty: 4,
        price: 10,
        triggerQty: 3,
        discountedQty: 2
      },
      {
        expected: 40,
        id: 'classic',
        qty: 6,
        price: 10,
        triggerQty: 3,
        discountedQty: 2
      }
    ]
    tests.forEach(t => {
      let received 
        = Discount.pay_less_quantities(
          t.id, 
          t.qty, 
          t.price, 
          t.triggerQty, 
          t.discountedQty)
      expect(received).toEqual(t.expected);
    })
  })

  it('pay_less_price should work properly', () => {
    let tests = [
      {
        expected: 24,
        id: 'classic',
        qty: 3,
        price: 10,
        discountedPrice: 8
      },
      {
        expected: 0,
        id: 'classic',
        qty: 0,
        price: 10,
        discountedPrice: 8
      }
    ]
    tests.forEach(t => {
      let received 
        = Discount.pay_less_price(
          t.id, 
          t.qty, 
          t.price, 
          t.discountedPrice)
      expect(received).toEqual(t.expected);
    })
  })

  it('pay_less_price_when_buy_more should work properly', () => {    
    let tests = [
      {
        expected: 24,
        id: 'classic',
        qty: 3,
        price: 10,
        triggerQty: 3,
        discountedPrice: 8
      },
      {
        expected: 20,
        id: 'classic',
        qty: 2,
        price: 10,
        triggerQty: 3,
        discountedPrice: 8
      },
      {
        expected: 32,
        id: 'classic',
        qty: 4,
        price: 10,
        triggerQty: 3,
        discountedPrice: 8
      }
    ]
    tests.forEach(t => {
      let received 
        = Discount.pay_less_price_when_buy_more(
          t.id, 
          t.qty, 
          t.price, 
          t.triggerQty, 
          t.discountedPrice)
      expect(received).toEqual(t.expected);
    })
  })
})