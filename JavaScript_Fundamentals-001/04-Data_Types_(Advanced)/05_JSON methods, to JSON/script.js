// Task 1 (JSON topic's one practice task that covers almost everything)

let formInput = { username: "rahul_dev", age: 25, isSubscribed: true, bio: undefined };

let requestBody = JSON.stringify(formInput);

console.log(requestBody);                       // {"username":"rahul_dev","age":25,"isSubscribed":true}  = the bio property It just ignored because of the JSON

let prettyPrint = JSON.stringify(formInput, null, 2);

console.log(prettyPrint);                       

/* {
  "username": "rahul_dev",
  "age": 25,
  "isSubscribed": true
} */                                            // It's not squinting at one long unformatted line just like above
 

let apiResponse = '{"status":"success","userId":102}';

let responseData = JSON.parse(apiResponse);

console.log(responseData.userId);               // 102 = Answer as number direct through the apiResponse 