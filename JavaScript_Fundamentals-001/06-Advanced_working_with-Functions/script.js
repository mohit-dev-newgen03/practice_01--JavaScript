// Task 1 : Recursion and the stack 

function sumUpTo (n){

    if (n == 1)return n;
     return n += sumUpTo(n - 1);
     
};

console.log( sumUpTo(5) );          // 15