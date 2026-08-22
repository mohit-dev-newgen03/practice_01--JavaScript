// Task 1 : Round a number to the nearest multiple of 10


function roundToNearest10 (num){
    let shrink = Math.round(num / 10);
    return shrink * 10;
}

console.log(roundToNearest10(27));                      // 30
console.log(roundToNearest10(22));                      // 20 = nearest multiply for 22;