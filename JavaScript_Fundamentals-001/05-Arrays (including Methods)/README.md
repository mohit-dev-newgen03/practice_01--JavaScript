Array :- This is one of a data type in js, the data that stores in a row where it shows as a sequence of numbers, starting from 0 zeroth.
In this folder i will practice Array and its methods, and tasks related to it. 🤩 
Complete array section to array's modern methods and even more related to it



**Task 1 : Array basics (push/pop/unshift/shift)**

For this task, Firstly i created an empty array to add there few jobs through the correct method,
then i used Last in First out method AKA : `LIFO` to add 3 jobs and remove the first most added job 
after all these, i print removed and all the left job titles. 


**Task 2 : Array basics (indexed loop + length)**

Accumulating all the values in the Attendence Array using a for loop and printed its total value,
after that also printed the last index of the attendence index through `.lenght` property using square brackets.


**Task 3 : Array basics (push/pop + array mutability)**

Here in this task i've made a small to do list task checker ( to check the mutability of an Array )
used an array `todoList` that holds a few values of tasks and then added a value in it through .push method 
lastly to check the mutability of the array, i removed the last most added value and saved it in a new undoneTask variable.  


**Task 4 : Arrays method (.slice() vs .splice())**

In this task, i created an array where were a few songs
the task is to store 3 songs from the starting of that arrays into a new variable through `.slice` method
and lastly the one last task was to remove a song in the middle of the array and print the whole changed array.


**Task 5 : Arrays method (.forEach() vs .map())**

Using two different methods to differentiate the core usage and more efficient work of them 
using `forEach` method to just iterate and print arrays all index, then used `.map` to build a whole new array
and changing every indexes value in the new one despite of touching the old once. 


**Task 6 : Arrays method (.filter() and .findIndex())**

Here we have used two different methods on the basis of there behaviour to find the related items in a specific array.
the task were to find the items that are in the stock of a array through the `filter` method 
and finding the first out of stock item through the `findIndex` method and print them both 


**Task 7 : Arrays method (.sort() and the numeric trap)**

This is one of a hard task that required me to learn in depth about the sorting internal program
here the `sort` method uses *Unicode* comparison to compare elements in an array,
so by default 1 stands first in the descending order and by default it only checks the first leter of an stringify array
that why without any instruction the core `sort` method prints a wrong output. 