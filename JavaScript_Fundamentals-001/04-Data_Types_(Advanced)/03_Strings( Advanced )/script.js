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


// Task 3 : function to check if the first character of a string is a Vowel


function startsWithVowel(word) {
    if (word[0] === "a" || 
        word[0] === "e" ||
        word[0] === "i" ||
        word[0] === "o" ||
        word[0] === "u"){
        return true;
        }else{
            return false;
        };
};

console.log(startsWithVowel("apple"));
console.log(startsWithVowel("banana"));


// Final Task 5 : Hidding email using slice and index of 


function maskEmail(email){
    let first3words = email.slice(0, 3);
    let atPosition = email.indexOf("@");
    let domainPart = email.slice(atPosition);
    
    let finalAnswer = first3words + "***" + domainPart; 
    return finalAnswer;
};

console.log(maskEmail("rahul123@gmail.com"));