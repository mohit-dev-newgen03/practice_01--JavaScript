// Task one 1 : Variables + Type Conversion

let totalOrder = "250";
let discountCoupon = "30";
  
let savingAmount = ((+totalOrder) * (+discountCoupon)) / 100;
let finalPrice = (+totalOrder) - savingAmount;
console.log(finalPrice);