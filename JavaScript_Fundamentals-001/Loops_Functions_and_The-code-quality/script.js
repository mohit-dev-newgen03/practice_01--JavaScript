// Task 1 : for loop with custom step

for (let i = 4; i <= 40; i+=4){
    console.log(i);
}


// Task 2 : switch fallthrough (grouping cases)

let day = "sat";

switch (day){
    case "mon":
    case "tue":
    case "wed":
    case "thur":
    case "fri":
        console.log("You're ordering on weekdays so your charges are ordinery");
            break;
    case "sat":
    case "sun":
        console.log("You're ordering on weekends so your charges are not ordinery they will be higher");
            break;
    default:
        console.log("The input is invalid");                                
};