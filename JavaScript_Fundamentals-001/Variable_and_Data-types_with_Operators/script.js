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


// Task three 3 : null vs 0 comparison inconsistency

let customerAge = null;

console.log(customerAge == 0);   // false print result of loose equality check
console.log(customerAge >= 0);   // true print result of relational check


// Task four 4 : Compared || vs ?? for a display-name fallback scenario

javascript
let nickName = "";
let userName = "real_user123";

let displayNameOld = nickName || userName ;
let displayNameNew = nickName ?? userName ;

console.log(displayNameOld);  // real_user123
console.log(displayNameNew);  // ""


// Task five 5 : Built a single-expression loyalty points calculator using ternary + type conversion

let basePoints = "120";
let isPrimeMember = true;
let bonusPoints = 50;

let finalPoints = isPrimeMember ? (+basePoints) + bonusPoints : +basePoints;

console.log(finalPoints);


// Task six 6 : Built an input sanitizer for a bank transfer form using isNaN() instead of truthy/falsy checks

let enteredAmount = "45ab";

if (isNaN(enteredAmount) || (+enteredAmount) <= 0){
    console.log("The transaction amount is unvalid");
}else {
    let newAmount = (+enteredAmount)
    console.log(`Transaction completed ${newAmount} transfered`)
}


// Task seven 7 : Built a shipping cost calculator using switch statement for a region-based e-commerce checkout system

let userRegion = "national";

switch (userRegion) {
    case "international":
        let shipingCostInternational = 250;
        console.log(`Your shiping cost is ${shipingCostInternational}`);
        break;
    case "national":
        let shipingCostNational = 100;
        console.log(`Your shiping cost is ${shipingCostNational}`); 
        break;
    case "local":
        let shipingCostLocal = 40;
        console.log(`Your shiping cost is ${shipingCostLocal}`); 
        break;    
    default :
        console.log("Unknown region - flag for review");    
}


// Task eight 8 : Built a final-price resolver chaining

let salePrice = null;
let regularPrice = "-15";

let truePrice = salePrice ?? regularPrice;
let correctPrice = Number(truePrice);

let finalPrice = correctPrice <= 0 ? 0 : correctPrice;

console.log(finalPrice);