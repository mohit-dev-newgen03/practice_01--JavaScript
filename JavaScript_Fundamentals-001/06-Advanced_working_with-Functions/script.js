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


// Task 3 : Variable scope and Closure

function createAccount(startingBalance){
    let balance = startingBalance;
    
    
        return {
            deposit: function (amnt){
                balance += amnt ; 
            },
            getBalance: function (){
                return balance;
            }               
        };
    

};

let myAccount = createAccount(1000);
myAccount.deposit(500);

console.log(myAccount.getBalance());


// Task 4 : The old "var"

function testScope(){
    if (true) { 
        var leaked = "I escaped!"; 
        let contained = "I stayed inside"; 
    }

    console.log(leaked);
    console.log(contained);
};

testScope();

/* 

The `var` variable just escaped prints = ``I escaped!``

and, The `let` variable contained, is not defined here gives a 
reference error = Uncaught ReferenceError: contained is not defined at testScope (script.js:8:17) at script.js:11:1

It's just because the rules of each variable `var` and `let` 
var is funtion scoped, doesn't respect "{}" curly braces (Blocks)
and on the other side, the `let` variable respects bracket and have block scoped
so, accessing it out of it's scope gives a reference error 

*/

console.log(myVar);
var myVar = "hello";                // undefined

/* 

Here it demonstrates the hoisting 
here in the example above we see how accessing var before initialization does not gives an error
intead it gave us undefined and it's not an error in js.  
*/


// Task 5 : Global object 

var globalVar = "I'm attached";
let globalLet = "I'm not attached";

console.log(globalThis.globalVar);          // I'm attached
console.log(globalThis.globalLet);          // undefined 

/* 

here The Global object shows how the var variables directly saves as properties in the global object 
there is an object exists which is named as Global object, which contains the main properties like JSON, Arrays and Objects
so the var variables, if create them globally they will go and save as global objects property and pollute there
but the let and const are does not like that, they create top-level variables that exist,they do not pollute the global object.


that why accessing globalThis.globalLet gives us undefined
*/


// Task 6 : Function object, NFE

let validateEmail = function(email) { 
    validateEmail.timesCalled++;
    return email.includes("@");
}

validateEmail.timesCalled = 0;

console.log(validateEmail("test@mail.com"));            // true
console.log(validateEmail("bademail"));                 // false

console.log(validateEmail.timesCalled);                 // 2


// Task 7 : the "new Function" syntax 

let multiply = new Function('a', 'b', 'return a * b');

console.log(multiply(4,5));                 // 20 = new Function() can't access outer/local variables the normal way (no closures), only the global scope.


// Task 8 : Scheduling: setTimeout and setInterval

let secondsLeft = 5;
let timerID;
 
function countDown() {
    secondsLeft--;
    console.log(secondsLeft);
    
    if (secondsLeft === 0) {
        console.log("Time's up!");
        clearInterval(timerID); 
    }
}

timerID = setInterval(countDown, 1000);    

/*
4
3
2
1
0
Time's up!
*/


// Task 9 : Decorators and forwarding, call/apply

function slowSquare(n) {
    console.log("Calculating...");
    return n * n;
};

function cachingDecorator(func) {
    let cache = new Map();

    return function (val) {
        if (cache.has(val)) {
            return cache.get(val);
        }

        let result = func(val); 
        
        cache.set(val, result);
        return result;   
    };
};

slowSquare = cachingDecorator(slowSquare);
console.log(slowSquare(4));                 // Calculating... 16
console.log(slowSquare(4));                 // 16    

console.log(slowSquare(5));                 // Calculating... 25    

function introduce(role) {
    return `Name is ${this.name} and role is ${role}`;
};

let obj = { name : "Priya" };
let occupation = "Human Resource";

console.log(introduce.call(obj, occupation));           // Name is Priya and role is Human Resource


// Task 10 : Function binding

let reminder = {
    username: "priya",
    notify() {
        console.log(`Hi! my name is ${this.username}`);
    }
};

setTimeout(reminder.notify, 1000);
// Hi! my name is undefined
// setTimeout receives only the function itself, without "reminder." in front of it.
// When it runs the function later, no object is calling it, so this is lost
// (same problem as introduceAlone() in 4.4). this.username has nothing to read.

let bound = reminder.notify.bind(reminder);

setTimeout(bound, 1000);
// Hi! my name is priya
// bind returns a new function with this permanently locked to reminder.

function applyDiscount(discountPercent, price) {
    return price - (price * discountPercent / 100);
}

let tenPercentOff = applyDiscount.bind(null, 10);
// partial application: discountPercent is fixed to 10, null because this isn't used

console.log(tenPercentOff(500)); // 450