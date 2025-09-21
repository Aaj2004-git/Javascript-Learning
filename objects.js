//singleton 
//singleton is one of its own
//it is not made by literals 
//it is made by constructor

//OBJECT LITERALS


//for SYMBOL primitive datatype
//     const mySym = Symbol("key 1")


// const JSuser = {
//     name: "Aayushi",
//     "full Name": "Aayushi Jaiswal",      //you can not access this object using dot method

//   //for SYMBOL primitive datatype
//     // mySym : "myKey1",   //return string value not symbol
//     [mySym] : "myKey1",    //return symbol type value
//     age: 20,
//     location: "Jaipur",
//     email: "Aayushi@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// //  
//  console.log(JSuser.email); //this way we can access the objects but it is not a good way of writing
//   console.log(JSuser["email"])  //it is the better way to access the object
//   // console.log(JSuser.full Name); //throws error

//   console.log(JSuser["full Name"])

//   //for SYMBOL primitive datatype
//   //  console.log(JSuser.mySym);       //Although it will return value but type of will be "String" and not symbol

//   //  console.log(JSuser[mySym]);  //return symbol type value
//   //  console.log(typeof JSuser[mySym])


//    JSuser.email = "Aayushi@chatgpt.com"
//   //  Object.freeze(JSuser)          //freeze the value
//    JSuser.email = "Aayushi@microsoft.com"   //it wont show error but wont even propogate as well
//    console.log(JSuser);

//    JSuser.greeting = function(){
//     console.log("Hello JS user");
//    }

//    JSuser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
//    }


//   //  console.log(JSuser.greeting);     // return Function anonymous
//    console.log(JSuser.greeting());
//      console.log(JSuser.greetingTwo());

//      //***********USUALLY WE USE DOT METHOD TO ACCESS THE OBJECT BUT IN SIOME SPECIAL CASES WE USE SQUARE BRACKET METHOD */




//++++++++++++++objects part 2+++++++++++++++

// const tinderUser = new Object()     //A singleton object
const tinderUser = {}                 //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Manny"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aayushi",
      lastname: "Jaiswal"
    }
  }
}

// console.log(regularUser.fullname.userfullname)

 const obj1 = {1:"a" , 2:"b"}
 const obj2 = {3:"a" , 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)     //learn more about object.assign in mdn

const obj3 = {...obj1, ...obj2}      //spread 
//  console.log(obj3);

  
 const users = [
  {
    id:1,
    email:"Aayushi@hotmail.com"
  },
  {
    id:1,
    email:"Aayushi@hotmail.com"
  },
  {
    id:1,
    email:"Aayushi@hotmail.com"
  },
  {
    id:1,
    email:"Aayushi@hotmail.com"
  },
  {
    id:1,
    email:"Aayushi@hotmail.com"
  },
 ]

 users[1].email

 console.log(tinderUser)

console.log(Object.keys(tinderUser))      //output datatype will be array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




//object destructuring(Important)
const course = {
       coursename: "JS",
       price: 999,
       courseinstructor: "Aayushi"
}

// course.courseinstructor

const {courseinstructor: instructor}  = course

// console.log(courseinstructor);

console.log(instructor);



//you can get the api in the object or array format.
//eg.json api, randomuser me, json formatter
//Json is  js object notation

//object
// {
//   "name" = "Aayushi",
//   "coursename" = "js",
//   "pricce" = "free"
// }
 
//Arrays
// [
//   {},
//   {},
//   {}
// ]