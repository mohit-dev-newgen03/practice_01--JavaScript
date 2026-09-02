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