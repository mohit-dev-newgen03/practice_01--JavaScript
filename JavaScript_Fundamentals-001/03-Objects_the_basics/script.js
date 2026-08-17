// Task 1 : Objects basisc syntax and basic practice

let product = {                                     // declaration and object initialization
    name : "shoes",
    price : 200,
    inStock : true
};

console.log(product.name);                          // accessing "name" property through dot notation
console.log(product["price"]);                      // accessing "name" property through bracket notation

product["discount"] = 30                            // making a new key value (property) pair in product object through bracket notation                
console.log(product["discount"]);                   // accessing new property 

delete product.inStock                              //  deletion of an old property in product object through delet keyword
console.log("inStock" in product);                  // the in operator to check does the "inStock" property still exists 

for (let keys in product){                          // the for in loop for objects to access key or value through product object 
    console.log(` ${keys} : ${product[keys]}` );
};


// Task 2 : Objects basisc syntax and basic practice

let realCart = {
    items: 3,
    totalPrice: 150
};

let previewCart = realCart;
previewCart.totalPrice = 500;

console.log(realCart.totalPrice);   // 500
console.log(previewCart.totalPrice); // 500
// Both changed because previewCart isn't a copy — it's just another reference
// to the same object as realCart. Changing one changes both.

let safeCopy = Object.assign({}, realCart);
safeCopy.totalPrice = 250;

console.log(realCart.totalPrice);  // 500
console.log(safeCopy.totalPrice);  // 250
// safeCopy is a real, independent copy, so realCart stays untouched.

console.log(realCart === previewCart); // true — same reference
console.log(realCart === safeCopy);    // false — different object, same starting values