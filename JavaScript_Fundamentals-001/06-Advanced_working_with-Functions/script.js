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