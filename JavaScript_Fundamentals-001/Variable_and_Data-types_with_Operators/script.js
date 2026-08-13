// Task one 1 : Variables + Type Conversion

let totalOrder = "250";
let discountCoupon = "30";
  
let savingAmount = ((+totalOrder) * (+discountCoupon)) / 100;
let finalPrice = (+totalOrder) - savingAmount;
console.log(finalPrice);


// Task two 2 : typeof operator behavior

let customerAge = 19;
let deliveryAddress = null;
let isPrime = undefined;

console.log(typeof customerAge); // = number 
console.log(typeof deliveryAddress); // = object : It's a well known bug in JavaScript from the earliest version of it, the typeof null is object its a typeof quirk it cannot be changable because there are so many old softwares that are based on this bug and if someone tries to change it the site or software might be crash.
console.log(typeof isPrime); // undefined


// Task two 3 : null vs 0 comparison inconsistency

let customerAge = null;

console.log(customerAge == 0);   // false print result of loose equality check
console.log(customerAge >= 0);   // true print result of relational check


// Task two 4 : Compared || vs ?? for a display-name fallback scenario

javascript
let nickName = "";
let userName = "real_user123";

let displayNameOld = nickName || userName ;
let displayNameNew = nickName ?? userName ;

console.log(displayNameOld);  // real_user123
console.log(displayNameNew);  // ""


// Task two 5 : Built a single-expression loyalty points calculator using ternary + type conversion

let basePoints = "120";
let isPrimeMember = true;
let bonusPoints = 50;

let finalPoints = isPrimeMember ? (+basePoints) + bonusPoints : +basePoints;

console.log(finalPoints);