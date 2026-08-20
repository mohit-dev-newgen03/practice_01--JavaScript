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


**Task 3 : modeling a simple employee record system for an HR tool.**

#Object Methods this*

Practiced how `this` is determined by the call site, not by where a
method is defined — reusing the same function across two different
objects (`employee` and `manager`) proved `this` changes based on who
calls it. Also observed what happens when a method is called with no
object attached (`this` breaks silently instead of throwing, since the
code isn't running in strict mode).


**Task 4 : A simple boolean indicator for movie rating**

#Object Methods, this and new cunstructor.

Built a `MovieRating` constructor with a method `isTopRated()` that
returns `true`/`false` based on the movie's rating. Practiced calling
constructors with `new`, and fixed two real mistakes along the way:
forgetting `()` when calling a method (which prints the function itself
instead of running it), and returning descriptive strings instead of an
actual boolean, which defeats the purpose of a yes/no method name.


**Task 5 : Objects - optional-chaining**

Practiced safely accessing a nested property (`contactInfo.phoneNo`) that
doesn't exist on every object, without crashing the script. Confirmed
regular dot notation throws a **TypeError** (not a ReferenceError) when
reading a property off `undefined`, while `?.` short-circuits safely and
returns `undefined` instead. Also learned that a function with no
`return` always resolves to `undefined` — so logging a method call
directly can print an unexpected extra `undefined` if you're not careful
about what you're actually logging.


**Task 6 : book-tracker**

# Objects Basics Library Book Tracker

Built a `Book` constructor with `borrowCopy()` and `getStatus()` methods
to track borrowed copies per book. Practiced constructor functions, `new`,
and `this` working correctly across multiple independent objects.

Note: constructor initially used comma-chained assignments instead of
separate statements — refactored for readability, since this pattern is
fragile and non-standard in real code.