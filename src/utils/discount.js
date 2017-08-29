// Independent discount class which contains 
// static functions calculating discounts. You can add 
// special discount function here

export default class Discount {
  
  static pay_less_quantities(ad_id, qty, price, triggerQty, discountedQty) {
    // not eligible for this discount.
    if (qty < triggerQty) {
      return price * qty
    }

    let total = 0.0;
    let n = qty % triggerQty;
    if (n > 0) {
      total = price * (n + (qty - n) / triggerQty * discountedQty)
    } else {
      total = price * (qty / triggerQty * discountedQty)
    }

    return total;
  }

  static pay_less_price(ad_id, qty, price, discountedPrice) {
    return qty * discountedPrice;
  }

  static pay_less_price_when_buy_more(ad_id, qty, price, triggerQty, discountedPrice) {
    // not eligible for this discount.
    if (qty < triggerQty) {
      return price * qty
    }

    return discountedPrice * qty;
  }
}