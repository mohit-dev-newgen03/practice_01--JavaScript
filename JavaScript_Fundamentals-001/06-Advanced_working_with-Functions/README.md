Functions are one of the most usable and important methods, 
function holds a specific expressions and bunch of codes that are executable. 

we need them everywhere 
even in the complex data structures like object and arrays 
i'll cover all the practice tasks and advanced working with the functions in this folder. 😉👍

 **Task 1 : Recursion and the stack**   

Recursion is an excellent alternative to loops because the function calls itself to,
solve a problem by addressing a smaller version of that same problem—this process is known as recursion. 
The "stack" is the area where data for each recursive call is stored. 

When the computer detects a nested recursive call (meaning the function is calling itself again), 
it pauses the current function, creates a new stack frame to store memory for the new recursive call, 
and operates based on the LIFO (Last-In, First-Out) principle.


**Task 2 : Spread parameters and rest parameters**

Practiced the two opposite uses of `...`: rest parameters to collect any
number of function arguments into a real array (totalCost using
.reduce()), and spread syntax to expand an array back into individual
arguments at a call site, plus combining two arrays into one. Confirmed
the "collect vs. expand" distinction depending on context (parameter
list vs. call site/array literal).


**Task 3 : Variable scope and Closure**

Built a bank account tracker where `balance` stays genuinely private —
inaccessible from outside — yet remains fully usable through deposit()
and getBalance(), both of which "remember" balance via closure, even
after createAccount() has already finished running. Fixed a bug where
getBalance() used console.log() internally instead of return, causing
an extra "undefined" to print from the outer console.log() wrapper —
same root cause as the earlier notifyUser bug: a function with no
explicit return always resolves to undefined.