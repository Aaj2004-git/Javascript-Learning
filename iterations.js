
//for
// for(let index = 0; index <= 10; index++){
//     const element = index;

//     if(element == 5){
//         console.log("5 is the best number")
//     }
//     console.log(element);
    
// }


// for(let i = 1; i <= 10; i++){
//     console.log(`Outer loop value: ${i}`)
//     for(let j = 1; j <= 10; j++){
//     //  console.log(`Inner loop value ${j} and inner loop ${i}`);
//       console.log(i + "*" + j + "=" + i * j) 
     
//     }
// }


// let myArray = ["flash", "Batman", "Superman"]
// console.log(myArray.length);
// for(let index = 0; index < myArray.length; index++){
//     const element = myArray[index];
//     console.log(element)
// }



//BREAK AND CONTINUE

// for(let i = 0; i <= 20; i++){
//     if(i == 5){
//         console.log("Detected");
//         break;
//     }
//     console.log(`Value of i is ${i}`);
    
// }



// for(let i = 0; i <= 20; i++){
//     if(i == 5){                                   //using continue will continue the loop whereas using break will stop the loop once that condition is satisfied
//         console.log("Detected");
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
    
// }



//WHILE AND DO WHILE LOOP

let index = 0;
// while(index <= 10){
//       console.log(`Value of index is ${index}`);
//       index = index + 2;
// }

// let myArray = ["flash", "batman", "superman"]

// let arr = 0;
// while(arr < myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr++;
    
// }

// let score = 1;

// do{
//     console.log(`Score is ${score}`);
//     score++;
// } while(score <= 10){

// }



//FOR OF LOOP

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     // console.log(num);
// }


// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }



//MAPS
// const map = new Map();
// map.set('IN' , "India");
// map.set('USA' , "United States of America");
// map.set('Fr' , "France");

// console.log(map);

// for of loop on maps
// for (const [key, value] of map) {                   //Using [] will fetch the key value pair separately , not in array
//     console.log(key, ":-", value);
    
// }


// for of loop on objects
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'        
// }

// for (const [key, value] of myObject) {                   //myObject is not iterable, will throw error
//     console.log(key, ":-", value)                  
// }                                                        //for object we will use forin loops



// for in loop on map
const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('Fr' , "France");

for (const key in map) {
        console.log(key)                             //wont print anything because we can not iterate maps using forin
    }                                                  //maps are not iterable 
