// Task 1 : Counting a character in a string without any built in method or function.

function countOccurrences(str, char){
    
    let aINstr = 0;
    for (let letter of str){
        if ( letter === char){
            aINstr = 1 + aINstr
        }else {
            continue    
        };
    };

    return aINstr;
}

console.log(countOccurrences("banana", "n"));           // 2 
console.log(countOccurrences("banana", "a"));           // 3


// Task 2 : Cleaning up messy string through a fromat Username function


function formatUsername (rawName){
    let cleanedRawname = rawName.trim();
    let lowerCase = (cleanedRawname.toLowerCase());

    let finalAnswer = "";
    for (let i = 0; i < lowerCase.length; i++){
        if (lowerCase[i] == " "){
            finalAnswer = finalAnswer + `_`;
        }else {
            finalAnswer = finalAnswer + lowerCase[i];
        };
    }
    return finalAnswer;
};

console.log(formatUsername("  Rahul Sharma  "));