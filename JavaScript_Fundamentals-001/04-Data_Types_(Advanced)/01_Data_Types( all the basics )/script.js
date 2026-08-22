// Task 1 : Primitive methods 


let username = "rahul_dev";
username.debugTag = "internal-test";

console.log(username.debugTag);
// undefined. When we write username.debugTag = "...", JS secretly creates a
// temporary wrapper object around the string, sets debugTag on that wrapper,
// then immediately destroys it. The real username variable is never touched,
// so trying to read debugTag afterward finds nothing there.

let price = 49.9999;

console.log(typeof price.toFixed(2));
// "string". toFixed() is a formatting method meant to prepare a number for
// display (like showing a price with exactly 2 decimal places), so by design
// it returns text, not a number. Doing math on its result would behave like
// string concatenation, not addition, unless converted back to a number.

let word = "cat";
word.toUpperCase();

console.log(word);
// "cat" - unchanged. toUpperCase() returns a brand-new string; it doesn't
// modify the original. Since we didn't reassign the result, word stayed the same.

word = word.toUpperCase();
console.log(word);
// "CAT" - now updated, because this time we assigned the returned value
// back into word.