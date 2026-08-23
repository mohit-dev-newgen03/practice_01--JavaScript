// Task 1 : Round a number to the nearest multiple of 10


function roundToNearest10 (num){
    let shrink = Math.round(num / 10);
    return shrink * 10;
}

console.log(roundToNearest10(27));                      // 30
console.log(roundToNearest10(22));                      // 20 = nearest multiply for 22;


// Task 2 : Check if a prize is safe to process


function isSafeToDisplay (price) {
    if (Number.isFinite(price)){
        return true;
    }else {
        return false;    
    }
};

console.log(isSafeToDisplay(299));              // true
console.log(isSafeToDisplay(1/0));              // false  = because the sum of a such value is infinity 
console.log(isSafeToDisplay(0/0));              // false  = because the sum of a such value is NaN 


// Task 3 : Numbers — getRandomBetween


function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomBetween(1, 6));


// Task 4 : processes messy price/quantity data

javascript
function processItem(rawPrice, rawQty){
    let cleanPrice = parseFloat(rawPrice);
    let cleanQuantity = parseInt(rawQty);

    let totalCost = (cleanPrice * cleanQuantity);
    return +(totalCost.toFixed(2));
};

console.log(processItem("49.99 USD", "3 units"));       // = 149.97,    the total amount of cleanPrice and cleanQuantity, the fractional part is also counted.
console.log(processItem("abc", "3 units"));             // = NaN,       because the calculation failed caused by unreal rawPrice.