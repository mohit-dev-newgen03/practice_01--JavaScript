This is the second folder of my JS fundamental practice,
here i will cover loops, functions and code quality, all my practice tasks came from Claude and all my learning session are from javascript.info. Thank you 🙇‍♂️ 



**Task 1 : for loop with custom step**

Task 1: Practiced a for loop with a custom step (i += 4) to simulate batch inspection logic (every 4th warehouse item). Key bug caught: i*4 as a step is just a discarded calculation, not a reassignment — only compound assignment operators like += actually update the loop counter. Learned to let loop structure (start + step) do the filtering instead of adding an if check inside the body.