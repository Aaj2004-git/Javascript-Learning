const user = {
     username: "Aayushi",
     price: 999,

     welcomeMessage: function() {
          console.log(`${this.username},  welcome to website`);     //this refers to the current context
          console.log(this)
     }
}

// user.welcomeMessage()


//if someone change the username
// user.username = "sammy"          //here we have changed the context
// user.welcomeMessage()

//  console.log(this);               //empty object because there is no context in global


//  function T() {
//          let username = "Aayushi"
//         // console.log(this);                   //this has a lot a its own value
//         console.log(this.username);             //undefined
//  }
//        T()




// const chai = function () {
//     let username = "Aayushi"
//     console.log(this.username);
// }
// chai()



//***************Arrow functions *****************/
const chai = () => {
    let username = "Aayushi"
    console.log(this);            //empty braces
}
// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


//Another way --> Implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Aayushi"});
console.log(addTwo(3, 4));







//******************IIFE --> Immediately invoked function expression *********************/

(function one () {                    //named IIFE
        console.log(`DB CONNECTED`);
        
}) ();         //Semicolon is neccessary to end   


((name) => {
     console.log(`DB TWO CONNECTED ${name}`);
     
})('Aayushi');                            //In first paranthesis we will define the function and second paranthesis used for execution 



//Sometimes there is problem from the pollution of the global scope variable and to remove that pollution we will use 'IIFE'

/*What is IIFE : IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed as soon as
 it is defined. It is commonly used to avoid polluting the global namespace or to create a private scope for variables.*/

