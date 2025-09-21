

let a = 10;                       //global scope
var c = 400;

if(true){                    //block scope
 let a = 10     //Global scope is written outside the block or curly brackets whereas block scope is written inside the block
const b = 20
var c = 30

console.log("INNER:", a);

}

console.log(a);
// console.log(b);                 //throws error
console.log(c);


//Nested function
function one(){
    const username  = "Aayushi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);              //will throw error

    two()
}

// one()


if(true){
    const username = "Aayushi"

    if(username === "Aayushi"){
        const website = "youtube"
        console.log(username + website); 
    }
    // console.log(website);            //error
}
// console.log(username);              //error



//++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++

console.log(addone(5))    //it will run but in addTwo function if we run by writing it above the func. it will throw error
function addone(num){     //because addTwo is declared differently
    return num + 1                           //functions can be made this way
}

addTwo(5) //throws error
const addTwo = function(num){                //here variable is holding the function
    return num + 2                          //and function also made this way
}




