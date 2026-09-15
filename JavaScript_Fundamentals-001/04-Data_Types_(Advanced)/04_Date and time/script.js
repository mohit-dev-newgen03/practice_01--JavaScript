// Task 1 : Parsing an date string + formatting for display

let apiTimestamp = "2026-09-12T14:30:00";

let dateAndTime = new Date(apiTimestamp);
let year = (dateAndTime.getFullYear());
let month = (dateAndTime.getMonth());
let date = (dateAndTime.getDate());

console.log(`Posted on : ${date}/${month + 1}/${year}`)         // Posted on : 12/9/2026