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


// Task 3 : modeling a simple employee record system for an HR tool.

let employee = {
    name: "John",
    role: "SRE",
    introduce() {
        console.log(`Hi im ${this.name}, working as ${this.role}`);
    }
};

let manager = {
    name: "Robert",
    role: "SRE Manager"
};

manager.introduce = employee.introduce;
manager.introduce();

let introduceAlone = employee.introduce;
introduceAlone();


// Task 4 : A simple boolean indicator for movie rating

function MovieRating (title, rating, genre){
    this.title = title
    this.rating = rating
    this.genre = genre
    this.isTopRated = function(){
        if(this.rating >= 8){
            return true;
        }else{
            return false;
        };
    };
};

let firstMovie = new MovieRating("endgame", 10, "Action/Thriller");
let secondMovie = new MovieRating("Toy Story", 4, "Comedy/Children");

console.log(firstMovie.isTopRated());
console.log(secondMovie.isTopRated());


// Task 5 : Objects - optional-chaining

let userWithContact = {
    name: "John",
    age: 20,
    contactInfo: {
        phoneNo: 121234,
        emailId: "john@gmail.com"
    },
    notifyUser: function () {
        console.log(`Hello user ${this.contactInfo.phoneNo}, is your phone No.`);
    }
};

let userWithoutContact = {
    name: "Robert",
    age: 15
};

// console.log(userWithoutContact.contactInfo.phoneNo); 
 
// Uncaught TypeError: Cannot read properties of undefined (reading 'phoneNo')
// Note: this is a TypeError, not a ReferenceError. contactInfo IS undefined here
// (a valid value), but we tried to read a property OFF an undefined value —
// that's a type-level problem, not a "this name doesn't exist" problem.

console.log(userWithoutContact.contactInfo?.phoneNo); // undefined — no crash
console.log(userWithContact.contactInfo?.phoneNo);    // 121234 — real value returned

userWithoutContact.notifyUser?.(); // does nothing, safely, since notifyUser doesn't exist
userWithContact.notifyUser?.();    // runs normally, logs the phone message


// Task 6 : book-tracker 

function Book(title, author, totalCopies) {
    this.title = title;
    this.author = author;
    this.totalCopies = totalCopies;
    this.borrowedCopies = 0;

    this.borrowCopy = function () {
        if (this.borrowedCopies < this.totalCopies) {
            this.borrowedCopies += 1;
        } else {
            return "No copies are available";
        }
    };

    this.getStatus = function () {
        return `Copies of ${this.title} by ${this.author} are borrowed ${this.borrowedCopies}/${this.totalCopies}`;
    };
}

let book1 = new Book("Poem of rain", "Robert", 4);
let book2 = new Book("raining in ocean", "Michael", 7);

book1.borrowCopy();
console.log(book1.getStatus()); // 1/4

book1.borrowCopy();
book1.borrowCopy();
book1.borrowCopy();
console.log(book1.getStatus()); // 4/4

book2.borrowCopy();
book2.borrowCopy();
book2.borrowCopy();
console.log(book2.getStatus()); // 3/7