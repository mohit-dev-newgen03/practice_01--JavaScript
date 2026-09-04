// Task 1 : Array basics (push/pop/unshift/shift) 


let printQueue = [];

printQueue.push("Report.pdf");
printQueue.push("Invoice.docx");
printQueue.push("Photo.png");

console.log(printQueue.shift());            // Report.pdf
console.log(printQueue);                    // (2) ['Invoice.docx', 'Photo.png']


// Task 2 : Array basics (indexed loop + length)


let dailyAttendence = [45, 62, 38, 71, 55];

let total = 0;
for (let i = 0; i < dailyAttendence.length; i++){
    total += dailyAttendence[i];  
};

console.log(total);                                             // 275 = Total of the given attendence
console.log(dailyAttendence[dailyAttendence.length - 1]);       // 55 = Last value of the attendence array 


// Task 3 : Array basics (push/pop + array mutability)


let todoList = ["Buy groceries", "Clean house", "Pay bills"];

todoList.push("Call dentist");

let undoneTask = todoList.pop();    // Removing the last task and storing it in a new undoneTask variable

console.log(undoneTask);            // The task that were removed 
console.log(todoList);              // Whole todo list 


// Task 4 : Arrays method (.slice() vs .splice())


let fullPlaylist = ["Song A", "Song B", "Song C", "Song D", "Song E"];

let previewList = fullPlaylist.slice(0, 3);
console.log(previewList);                       // created and printed new playlist using the fullPlaylist

console.log(fullPlaylist);                      // confirming that the original in not changed

fullPlaylist.splice(2, 1);                      // updating the original fullPlaylist and removing a song on the index 2
console.log(fullPlaylist);                      // confirming the changes of fullPlaylist


// Task 5 : Arrays method (.forEach() vs .map())


let prices = [200, 450, 75, 620];

prices.forEach(function(price){
    console.log(`Price : ${price}`)
});

let discountedPrices = prices.map(function(value){
    let discount = value - 20;
    return discount;
});

console.log(discountedPrices);                  // (4) [180, 430, 55, 600]  the discounted price through .map method
console.log(prices);                            // (4) [200, 450, 75, 620]  Untouched prices Array that contains old unchanged price


// Task 6 : Arrays method (.filter() and .findIndex())


let stockLevels = [12, 0, 5, 0, 8, 3];

let inStockOnly = stockLevels.filter(item => item > 0);
console.log(inStockOnly);                                           // (4) [12, 5, 8, 3] = only these are above 0 

let firstOutOfStock = stockLevels.findIndex(item => item == 0);
console.log(firstOutOfStock);                                       // 1 = the first 0 is at the first index of the array


// Task 7 : Arrays method (.sort() and the numeric trap)


let scores = [45, 9, 100, 23, 5];

let sortedScores = scores.sort();
console.log(sortedScores);                              // (5) [100, 23, 45, 5, 9] = it's because the sort method uses unicode comparison by default and 1 comes before 2 and so on that why 9 comes last.

let trueSortedScore = scores.sort((a, b) => a - b );     

console.log(trueSortedScore)                            // (5) [5, 9, 23, 45, 100] = here is the right answer when we applied a comparison function to sort method.