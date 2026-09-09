// Task 1 : Objects Advanced (Object.keys() + array methods together)

let formData = { name: "Rahul", email: "", phone: "9876543210" };

let keys = Object.keys(formData);

    keys.forEach((element) => {
        console.log(`${element} : ${formData[element]}`);
    });


// Task 2 : Objects Advanced (Object.values()) 

let salesByCategory = { electronics: 45000, clothing: 12000, groceries: 8000 };

let totalRevenue = Object.values(salesByCategory).reduce((total, rightNow) => total + rightNow, 0);

console.log(totalRevenue);                   


// Task 3 : Objects Advanced (Object.entries())

let stockCounts = { pens: 2, notebooks: 0, erasers: 15, staplers: 0 };

let outOFstocks = Object.entries(stockCounts).filter(empty => empty[1] === 0);

console.log(outOFstocks);