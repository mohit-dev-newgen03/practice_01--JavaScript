In this folder i'll cover the objects data type one of the reference data taypes. 😉👍 Thank you 


**Task 1 : Objects basisc syntax and basic practice**

Taks one is to only make a new object and accessing its value through dot or bracket notation after that using delet and in property or operator to delete an old initialized property of that object and checking if that deleted property still exists or not in that object, lastly i've accessed both key and value pair through a for in loop. 


**Task 2 : Object References and Copying**

Practiced the difference between assigning an object by reference vs
creating an independent copy, using a "shopping cart preview" bug scenario.

*Key takeaway:* `let previewCart = realCart` doesn't copy the object —
it points to the same one in memory. Use `Object.assign({}, obj)` or
`{ ...obj }` for a real, independent copy. `===` on objects compares
reference, not content.