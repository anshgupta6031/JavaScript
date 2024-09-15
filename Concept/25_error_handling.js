



setTimeout(() => {
    console.log("Hacking wifi..... Please wait.......")
}, 1000);


setTimeout(() => {
    console.log("Fetching username and password.....")
}, 2000);


setTimeout(() => {
    console.log("Hacking rahul's facebook......")
}, 3000);


setTimeout(() => {
    console.log("Id hacked.......")
}, 4000);



try{                                    //  the code which may cause an error is written in the try block......
    throw new ReferenceError("Invalid variable...")             //  'throw' is used to throw a custom error......       //  'ReferenceError' is a type of error, there may be any other type of error thrown.....
}

catch(error){                           //  the error is handled by the catch block.....      //  the passed parameter 'error' is the error object........
    console.log("Error detected....")
    console.log(error.name)                     //  gives the name of the error.........
    console.log(error.message)                  //  gives the error message.........
    console.log(error.stack)                    //  gives all the details corresponding to the error name........
    console.log('\n')
}

finally{                                 //   finally is used to execute the furthur data processing after the API call.
    console.log("ho gya")
}                                        //   NOTE :- No matter what, if finally exists, it is always executed.....


//  NOTE :- try, catch only handle the synchronous codes.......
