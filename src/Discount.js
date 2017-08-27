export default class Discount {
  
  static pay_less_quantities(ad_id, qty, price, triggerQty, discountedQty) {
    // not eligible for this discount.
    if (qty < triggerQty) {
      return [
        {
          id: ad_id,
          qty: qty,
          price: price
        }
      ];
    }

    let detail = [];
    let n = qty % triggerQty;
    if (n > 0) {
      detail.push({
        id: ad_id,
        qty: n + (qty - n) / triggerQty * discountedQty,
        price: price
      });
    } else {
      detail.push({
        id: ad_id,
        qty: qty / triggerQty * discountedQty,
        price: price
      });
    }

    return detail;
  }

  static pay_less_price(ad_id, qty, price, discountedPrice) {
    let detail = [];
    detail.push({
      id: ad_id,
      qty: qty,
      price: discountedPrice
    });
    return detail;
  }

  static pay_less_price_when_buy_more(ad_id, qty, price, triggerQty, discountedPrice) {
    // not eligible for this discount.
    if (qty < triggerQty) {
      return [
        {
          id: ad_id,
          qty: qty,
          price: price
        }
      ];
    }

    let detail = [];
    detail.push({
      id: ad_id,
      qty: qty,
      price: discountedPrice
    });
    return detail;
  }
}