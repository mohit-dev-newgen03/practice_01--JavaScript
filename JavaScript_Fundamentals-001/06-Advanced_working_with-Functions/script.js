// Task 1 : Recursion and the stack 

function sumUpTo (n){

    if (n == 1)return n;
     return n += sumUpTo(n - 1);
     
};

console.log( sumUpTo(5) );          // 15


// Task 2 : Spread parameters and rest parameters

function totalCost (...prices){

    return prices.reduce((sum, cost) => sum + cost, 0);

};

console.log( totalCost(100, 250, 75) );                   // 420
console.log( totalCost(50, 50) );                         // 100

let weekdayPrices = [100, 200];
let weekendPrices = [150, 300];

let allPrices = [...weekdayPrices, ...weekendPrices];

console.log( totalCost(...allPrices) );                   // 750