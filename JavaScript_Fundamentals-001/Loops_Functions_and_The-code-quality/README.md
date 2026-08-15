This is the second folder of my JS fundamental practice,
here i will cover loops, functions and code quality, all my practice tasks came from Claude and all my learning session are from javascript.info. Thank you 🙇‍♂️ 



**Task 1 : for loop with custom step**

Task 1: Practiced a for loop with a custom step (i += 4) to simulate batch inspection logic (every 4th warehouse item). Key bug caught: i*4 as a step is just a discarded calculation, not a reassignment — only compound assignment operators like += actually update the loop counter. Learned to let loop structure (start + step) do the filtering instead of adding an if check inside the body.


**Task 2 : switch fallthrough (grouping cases)**

Task 2: Practiced a for loop with a custom step (i += 4) to simulate batch inspection logic (every 4th warehouse item). Key bug caught: i*4 as a step is just a discarded calculation, not a reassignment — only compound assignment operators like += actually update the loop counter. Learned to let loop structure (start + step) do the filtering instead of adding an if check inside the body.


**Task 3 : Function Declaration vs Expression (hoisting)**

Task 3: Demonstrated hoisting difference between function declarations and function expressions. Confirmed function declarations are fully hoisted (usable before their line), while function expressions assigned via const/let are only name-hoisted and sit in the Temporal Dead Zone (TDZ) until their line executes — calling early throws a ReferenceError, not undefined.


**Task 4 : Default Parameters (real business defaults)**

Task 3: Demonstrated hoisting difference between function declarations and function expressions. Confirmed function declarations are fully hoisted (usable before their line), while function expressions assigned via const/let are only name-hoisted and sit in the Temporal Dead Zone (TDZ) until their line executes — calling early throws a ReferenceError, not undefined.


**Task 5 : Debugging Mindset (find the bug, don't just fix blindly)**

Task 5: Debugged a broken average-calculation function using console.log to observe actual vs expected output before fixing. Confirmed the bug (dividing by 2 instead of 3, the actual count of values) through direct observation rather than blind guessing — reinforced hypothesis-test-confirm debugging workflow.