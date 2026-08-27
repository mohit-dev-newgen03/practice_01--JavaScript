// Task 1 : Array basics (push/pop/unshift/shift) 


let printQueue = [];

printQueue.push("Report.pdf");
printQueue.push("Invoice.docx");
printQueue.push("Photo.png");

console.log(printQueue.shift());            // Report.pdf
console.log(printQueue);                    // (2) ['Invoice.docx', 'Photo.png']