// Task 1 : for loop with custom step

for (let i = 4; i <= 40; i+=4){
    console.log(i);
}


// Task 2 : switch fallthrough (grouping cases)

let day = "sat";

switch (day){
    case "mon":
    case "tue":
    case "wed":
    case "thur":
    case "fri":
        console.log("You're ordering on weekdays so your charges are ordinery");
            break;
    case "sat":
    case "sun":
        console.log("You're ordering on weekends so your charges are not ordinery they will be higher");
            break;
    default:
        console.log("The input is invalid");                                
};


// Task 3 : Function Declaration vs Expression (hoisting)

greetDeclared();
greetExpression();

function greetDeclared(){
    console.log("Hello function declaration");      // Hello function declaration
} 

const greetExpression = function(){
    console.log("Hello function expression");       // Uncaught ReferenceError: Cannot access 'greetExpression' before initialization
};


// Task 4 : Default Parameters (real business defaults)

function calculateTotal(price, taxRate = 8){
    return price + (price * taxRate / 100)
};

console.log(calculateTotal(2500, 50));
console.log(calculateTotal(2500));


// Task 5 : Debugging Mindset (find the bug, don't just fix blindly)

javascript
function calculateAverage(order1, order2, order3) {
  let total = order1 + order2 + order3;
  console.log( total / 2); // answer is 300 but we need here 200 because the average of 3 values are always got by deviding it through 3 counts
  // here is the main problem and we can just fix it through changing the devisible to 3  
}


javascript
function calculateAverage(order1, order2, order3) {
  let total = order1 + order2 + order3;
  let average = total / 3;
  return average;
}

console.log(calculateAverage(100, 200, 300));   // 200 final answer


// Task 6 : Refactor "Ninja Code" into Clean Code

function biggestScore (score1, score2, score3){
    let firstBigScore = score1 > score2 ? score1 : score2 ; // finding the higher of the first two scores
    let finalBigScore = firstBigScore > score3 ? firstBigScore : score3 ; // which team got first possition through scoring highest
    return finalBigScore ; // the final result on the basis of highest score
}
console.log( biggestScore(45,12,89) ); // 89 here we have scores of 3 different cricket teams and now we have to find the winner