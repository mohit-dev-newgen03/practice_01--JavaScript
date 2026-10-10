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


**Task 4 : The old "var"**


Demonstrated var's two core quirks directly: function-scoping (a var declared inside an if-block "escapes" 
into the surrounding function, unlike let, which stays block-scoped and throws a ReferenceError when
accessed outside its block), and hoisting (accessing a var before its declaration line silently returns undefined 
instead of crashing, unlike let/const, which throw in the temporal dead zone). 

Reinforced why let/const were introduced — to catch these silent failure modes early
as real errors instead of letting them pass unnoticed.


**Task 5 : Global object**

Demonstrated that top-level `var` declarations automatically attach themselves as properties on the global object (globalThis), 
while `let`/`const` deliberately do not — avoiding global namespace pollution. 

Noted that `globalThis` works consistently across environments (browser's `window`, Node's `global`), 
which matters since backend work happens in Node, where `window` doesn't exist.


**Task 6 : Function object, NFE**

Practiced attaching a custom property (timesCalled) directly onto a function object
incrementing it on each call to track usage — confirming functions are real objects that can carry their own data.
Clarified that a function body accessing its own outer variable name isn't special 
"behind the scenes" behavior — it's the same outer-scope access used throughout closures (6.3); the function and the outer
variable are the same reference, not a copy. Learned this approach is fragile if the outer variable gets reassigned, which is exactly why Named Function Expressions (NFE) exist as a safer self-reference pattern for cases like recursion.


**Task 7 : the "new Function" syntax**

Created a function dynamically from strings using new Function(), a rarely-used third way to define functions 
(mainly relevant for code-generation or executing trusted dynamic logic at runtime). 
Noted the key limitation: unlike normal functions, new Function() doesn't form closures with surrounding code 
— it only has access to the global scope, not local variables from where it's created.


**Task 8 : Scheduling: setTimeout and setInterval**

Explored JavaScript's native scheduling methods to create a dynamic countdown timer using setInterval(). Highlighted the critical distinction between a timer's execution reference—which must be a named function to be explicitly callable—and the timer's tracking ID, which is a primitive value used solely by clearInterval() to stop execution. Fixed an initial timing configuration error by adjusting the delay from 5000ms (5 seconds per tick) to 1000ms (1 second per tick) to ensure accurate real-time updates. Additionally, demonstrated how to bypass single-return syntax limitations by using console.log() statements to output multiple progressive conditions within the interval loops.


**Task 9 : Decorators and forwarding, call/apply**

Built a caching decorator: `cachingDecorator(func)` creates a Map once
and returns a wrapper that checks the Map on every call, returning the
stored result on a hit and only calling the original function on a
miss. Verified it by calling slowSquare(4) twice and confirming
"Calculating..." printed only once for it. Also used `func.call(obj, arg)`
to run a plain function with an explicitly chosen `this`, passing its
arguments one by one after the context.


**Task 10 : Function binding**

Showed that passing an object method directly to setTimeout loses `this`
(no object calls it later, so this.username is undefined), and fixed it
with `bind`, which returns a new function with `this` permanently locked.
Also used `bind` for partial application, fixing the first argument of
applyDiscount to 10 to create a reusable tenPercentOff function.
Fixed a bug where the function returned the discount amount (50)
instead of the discounted price (450).