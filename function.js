function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
//    let result = number1 + number2  
//    return result                        //nothing executes after return statement so console .log will not get executed
//    console.log("AAyushi");

return number1+number2                     //another way to return
   
}
// addTwoNumbers(3, null)
// addTwoNumbers(3, 4)
const result = addTwoNumbers(3, "4")
console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Aayushi"))
console.log(loginUserMessage());


function calculatecartprice(...num1){
    return num1
}

// console.log(calculatecartprice(200, 300, 400));

const user = {
    username: "Aayushi",
    price: 199
}

function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobject(user)
handleobject({
    username: "Siobhan",
    price: 199
})

const myNewArray = [200, 400, 100, 1000]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 1000]));



