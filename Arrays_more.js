
//Arrays

const myArr = [0, 1, 2, 3, 4, 5]        //elements can be of different type also

// Arrays are not primitives in JS but are array objects
// Js arrays are resizable and can contain mix of datatypes
//read more on mdn docs

const Heroes = ["shaktiman", "batman"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
 
// myArr.unshift(4)               //Inserts  -- add at start

console.log(myArr.includes(6));
console.log(myArr.indexOf(3));



myArr.shift()
console.log(myArr);



const marvel_heros = ["thor", "hulk", "Ironman"]
   const dc_heros = ["superman", "flash", "batman"]

   // marvel_heros.push(dc_heros)

   // console.log(marvel_heros);
   // console.log(marvel_heros[3][2]);

   const allHeros = marvel_heros.concat(dc_heros)
   console.log(allHeros);

   const all_new_heros = [...marvel_heros, ...dc_heros]
   console.log(all_new_heros);
   
  
   

     const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
     
     const real_another_array = another_array.flat(Infinity)
     console.log(real_another_array);
     
      console.log(Array.isArray("Aayushi"))       //checks if it is array here it is not array so return false
      console.log(Array.from("Aayushi"))        //convert to array
      console.log(Array.from({name: "Aayushi"}))     //it does not whether to convert key or value dont know what to return therfore return empty 
                                                     // it is an interesting case


      let score1 = 100  
      let score2 = 200
      let score3 = 300 
      
      console.log(Array.of(score1,score2,score3));
      