// Task 1 : Objects Advanced (Object.keys() + array methods together)

let formData = { name: "Rahul", email: "", phone: "9876543210" };

let keys = Object.keys(formData);

    keys.forEach((element) => {
        console.log(`${element} : ${formData[element]}`);
    });