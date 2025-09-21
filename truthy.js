// const userEmail =" a@aayushi.ai"
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("got user email");
    
}else{
    console.log("do not have user email");
    
}



//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", " ", 'false', "false", [], {}, function(){}


//Note:- 1.) false == 0 (returns true)
        //  2.) false == "" (returns true)
        //  3.) 0 == ""  (returns true)


// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }



//check whether object is empty or not
// const empObj = {}

// if(Object.keys(empObj).length === 0){
//     console.log("object is empty");
    
// }





// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10   //10

// val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 20       //10, returns first value

console.log(val1) 



//Sometimes when you call from database or firebases then it may give two values or null values 
// or no values , in that case the whole code structure can get disturbed, so for that special case we use this or ??



/***************Ternary Operator**************** */

// condition? True: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");
