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