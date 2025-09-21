console.log("Aayushi");

const accountId = 14332
let accountEmail = "Aayushi@google.in"
var accountPassword = "12345"
accountCity = "Jaipur"  //Not a good Practice
let accountState;   //undefined

// accountId = 2 //Not allowed

accountEmail = "sj@gmail.com"
accountPassword = "3314566"
accountCity = "Kanpur"

console.log(accountId);  

/*
Prefer not to use var
because of issue in block scope and global scope
*/

console.log(accountEmail);
console.log(accountPassword);              //To avoid these we can use console.table
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])        //to get the tabular form
