"use strict"; //treat all Js code as Newer version

// alert(3 + 4)   //we are using nodejs, not browser

// console.log(3+3);  console.log("Aayushi");    //not prettier, improve code readability by writing in separate lines

// let name = "Aayushi"
// let age = 18
// let isLoggedIn = false


//Primitive Datatypes:-
//number => 2 to power 53
//bigint
//string =>
//boolean => True/False
//null => standalone value
//undefined 
//symbol => unique


//object   --> objects are declared with const
//  console.log(typeof null);      //gives object as output
//  console.log(typeof undefined);   //gives undefined as output





// //Datatype Conversion Confusion
// let score = null
//  console.log(typeof score);
//  console.log(typeof(score));

//  let valueInNumber = Number(score)
//  console.log(typeof valueInNumber);        //conversion
//  console.log(valueInNumber);

//  // "33" => 33
//  // "33abc" => NaN  , but type is number which is confusing
//  // true => 1
//  // false => 0
//  // undefined => NaN; null => 0

//  let isLoggedIn = ""

//  let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

//  // 1 => true, 0 => false
//  // "" => false
//  // "Aayushi" => true

//  let someNumber = 33

//  let stringNumber = String(someNumber)
//  console.log(stringNumber);
//  console.log(typeof stringNumber);


 //*************** Operations ****************

 let value = 3
 let negValue = -value
 console.log(negValue);

// //  console.log(2+2);
// //  console.log(2-2);
// //  console.log(2*2);
// //  console.log(2**3);
// //  console.log(2/3);
// //  console.log(2%3);

// let str1 = "Hello"
// let str2 = " Aayushi"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);                      //ECMAScript Guidelines
// console.log(1 + 2 + "2");                       //Not a good way to write code, why to complicate
// console.log("2" + "2");


// console.log(true);            //true
// console.log(+true);           //1 (not a clean code)
// console.log(true+);            //error

// console.log(+"");

// let num1, num2, num3
// num1 = num2 = num3 = 2+2

// let gameCounter = 100;
// gameCounter++;
// // ++gameCounter;
// console.log(gameCounter);


//***********Comparisions of Datatypes in Js *************/
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);    //true   
// console.log("02">1);  //true           
// console.log(null > 0);   //false
// console.log(null == 0);  //false            //avoid these comparisons
// console.log(null >= 0);  //true         

// /*
// The reason is that an equality check == and comparisions > < >= <= works differently. Comparisions convert null to a number, 
// treating it as a 0. That's why (3) null >= 0 is true and (1) null > 0 is false.
//  */

// console.log(undefined > 0);   //false
// console.log(undefined == 0);  //false       //avoid these comparisons
// console.log(undefined >= 0);  //false


// // === (Strict check)

// console.log("2" === 2);  //false, datatype differ





// Datatypes Summary

//1. Primitive (these are generally call by value)

//7 types: String, Number, Boolean, null, undefined, Symbol(to make any value unique), BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedin = true
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3245657896789423267878n     //Adding n can convert it into BigInt

// //2. Reference (Non- Primitive)

// //Arrays, objects, functions

// const heroes = ["shaktiman", "naagRaj", "doga"]
// let myObj = {
//     name: "Aayushi",
//     age: 20,

// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof outsideTemp);   //object
// console.log(typeof heroes);    //object
// console.log(typeof myFunction);  //function
// console.log(typeof anotherId);  //Symbol

/* JavaScript is Dynamically typed language */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack memory (Primitive) , Heap(Non-Primitive)

//whenever we use stack memory then whatever variable we declare we get the copy of it. Any change will occur in the copied value.
//whenever we use Heap memory then whatever variable we declare we get the reference i.e original value.Any change will occur in OV



//Stack Example
// let myYoutubename = "AayushiJaiswaldotcom"
// let anothername = myYoutubename    //taken the copy of the OV myYoutybename
// anothername = "MrX"

// console.log(anothername);      //MrX
// console.log(myYoutubename);   //AayushiJiaiswaldotcom, as no changes in original value has occured



// let userOne = {
//     email: "googledotcom",
//     upi: "uset@ybl"

// }

// let userTwo = userOne

// userTwo.email = "Aaysuhi@google.com"

// console.log(userOne.email);  //Aaysuhi@google.com , both have the same output as they are referring to the same 
// console.log(userTwo.email);  //Aaysuhi@google.com



//**************************************************************************/

//***************** Strings ****************/

// const name = "Aayushi";
// const repoCount = 50;

// console.log(name + repoCount + " value");  //this is an obsolete way of writing the code

// console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String(`Aayushi-hc-com`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);  //gets the object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));

// const newString = gameName.substring(0,4);   //slicing (not included the last index like here index 4 is not included)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4); //ayu
// console.log(anotherString);

// const newStringOne = "    Aayushi     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());     //Read more on MDN

// const url = "https://Aayushi.com/Aayushi100%Jaiswal"

// console.log(url.replace('100%', '-'))

// console.log(url.includes('Aayushi'));

// console.log(gameName.split('-'));



 //***************************************************************************/             
                     //DATE AND TIME
   let myDate = new Date()
   console.log(myDate.toString());
    console.log(myDate.toDateString());
     console.log(myDate.toLocaleString());

     console.log(typeof(myDate));     //object

    //  let myCreatedDate = new Date(2023, 0, 23);
    //  console.log(myCreatedDate.toDateString());

    let myCreatedDate = new Date("01-14-2023");
    //  console.log(myCreatedDate.toLocaleString());

     let myTimeStamp = Date.now()

    //  console.log(myTimeStamp);
    //   console.log(myCreatedDate.getTime());
     
    // console.log(Math.floor(Date.now() / 1000));     //to convert in seconds 

    let newDate = new Date();
    console.log(newDate);
     console.log(newDate.getMonth());       //month start with zero
      console.log(newDate.getDay());        //day start with monday


    // `${newDate.getDay()} and the time`        //this is string interpolation

   newDate.toLocaleString('default',{
      weekday: "long"                             //to customise
   })

   
                     