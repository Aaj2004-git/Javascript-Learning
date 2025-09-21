

// const isUserloggedIn = true
// const temperature = 41

// if(temperature < 50){
//     console.log("less than 50");
// } else {
// console.log("greater than 50");
// }

//<, >, ==, <=, >=, !=


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`)
// }
// //   console.log(`User Power: ${power}`);         //power is not defined, it is outside the block scope where power was defined
  

// const balance = 1000
// if(balance > 500) console.log("test"),      //IMPLICIT SCOPE(no block scope)
// console.log("test2")                         //IMMATURE CODING STYLE

//Nesting
// if(balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//      console.log("less than 900")
// } else{
//     console.log("less than 1200");
    
// }


// const userLoggedIn = true
// const debitcard = true
// const loggedInfromgoogle = true

// if(userLoggedIn && debitcard){
//     console.log("Allow to buy course");
    
// }

// if(loggedInfromgoogle || loggedInfromEmail){
//     console.log("User logged In");
    
// }



//**************************Switch ***********************/
// switch(key){
//     case value:

//     break;                   //SYNTAX

//     default :
//     break;
// }


const month = 3

switch(month){
    case 1:
    console.log("Jan");
    break;

    case 2:
    console.log("feb");
    break;

    case 3:
    console.log("March");
    break;                       //It executes all the code after where the case match except default

    case 4:
    console.log("April");
    break;

    default:
        console.log("default");
        break;
        
}

