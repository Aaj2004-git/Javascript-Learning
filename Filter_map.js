 // const Coding = ["ruby", "js", "java", "python", "cpp"]

    // const values = coding.forEach((item) => {;
    //       console.log(item);
    //       return item;
    // })
    // console.log(values);

//   The return of values is undefined  Because .forEach() does not return anything useful — its return value is always undefined.
// Its purpose is just to execute a function on each element in the array — it's meant for side effects, like console.log.

// Even if you return item inside the callback, forEach doesn’t collect those return values.



//NOTE:-  Use forEach when you just want to do something with each element (like logging).
        //   Use map when you want to transform elements and get a new array in return.



    
        //filter
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => Num > 4)                 //filter uses callback function

// const newNums = myNums.filter((num) => {
//    return num > 4                                  //Another way of writing using arrow function, here  since you have 
// })                                                 //started a block {} so you have to write return because you are not inside ()


//Using forEach
// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


//More example using filter



// const books = [
//     {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// let userBooks = books.filter((bk) => bk.genre === 'History')

//  userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === 'History'
// }) 

// console.log(userBooks)




//USING MAP
// const myNumbers = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNumbers.map((num) => num + 10)
// const newNums = myNumbers.map((num) => {num + 10})       //return undefined, block is open  use return inside 
// console.log(newNums);



//CHAINING --> can use 2 or more methods together
// const myNumbers = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNumbers
// .map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num >= 40)

// console.log(newNums);


//Reduce method
//  const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//         console.log(`acc: ${acc} and currval: ${currval}`);
//         return acc + currval
        
// }, 0)

//same using Arrow method
const myNums = [1, 2, 3]
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);



const shoppingCart = [
        {
                itemName: "js course",
                price: 2999,
        },
        {
                itemName: "py course",
                price: 999,
        },
        {
                itemName: "web dev course",
                price: 1999,
        },
        {
                itemName: "java course",
                price: 3999,
        }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


