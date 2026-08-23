In this folder we only cover advanced working's with Numbers. 😊


 **Task 1 : Round a number to the nearest multiple of 10**

Instead of using the `Math.round` function in a single line, 
we saved the divided value into a separate variable named `shrink`, 
then performed the multiplication and determined the nearest 
multiple of those two values.


**Task 2 : Check if a prize is safe to process**

Using `Number.isSafeInteger`, I checked three different values—`NaN`, 
`Infinity`, and a normal integer—to see if they were safe to display.


**Task 3 : Numbers — getRandomBetween**

Built a function to generate a random whole number between min and max
(inclusive), using Math.random() combined with Math.floor() and range
math. Debugged a real "unused variable" bug along the way: a while-loop
condition checked a variable before it was ever assigned a value,
causing the loop to silently never run and the function to return
undefined every time — same class of bug as checking a condition before
the value it depends on actually exists.


**Task 4 : processes messy price/quantity data**

*Numbers — processItem*

Built a grocery price processor that safely parses messy string inputs
(parseFloat/parseInt) into usable numbers, rounds the total to 2 decimal
places for display, and converts the rounded value back into a real
number (since .toFixed() returns a string). Also confirmed NaN spreads
through any calculation it's part of, when parsing fails on invalid input.