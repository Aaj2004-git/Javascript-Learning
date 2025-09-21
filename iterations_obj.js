const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


//for object using for in loop
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
      
    }


    //for array using for in loop
    // const programming = ["js", "python", "Java", "swift", "cpp"]

    // for (const key in programming) {
         
        // console.log(key)      //will print key, 0, 1, 2, 3, 4
        // console.log(programming[key])   //will print values
            
        // }




        const coding = ["js", "python", "Java", "swift", "cpp"]

        // coding.forEach(function (val){            //here the function is callback function and it does not have name in it
         //       console.log(val);                   //Since this function is inside the array therefore the value inside the () as
                                                        //a parameter will bring out the value
              
        // })       
        
        
        
        //Same thing using arrow function
        // coding.forEach((item) => {                        //not have name
        //    console.log(item);
           
        // })        
        
        
        // function printMe(item){
        //     console.log(item)
        // }

        // coding.forEach(printMe)

        // coding.forEach((item, index, arr) => {
        //    console.log(itwm, index, arr)
        // })


        //the forEach doesnt only have the access of only one parameter, it can have more parameter which is shown in above example



    //     const myCoding = [
    //         {
    //               languageName: "Javascript",
    //               languageFileName: "js"
    //         },
    //         {
    //               languageName: "Java",
    //               languageFileName: "Java"
    //         },
    //         {
    //               languageName: "Python",
    //               languageFileName: "py"
    //         }
    //    ]
                
       
    //    myCoding.forEach( (item) => {
    //     console.log(item.languageName)                            //here you have the access of the object to get the value
    //    })
                    
    




   

