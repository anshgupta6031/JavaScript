



async function f () {                                   //  an asynchronous function is made which is written in a synchronous fashion.
    const promise = new Promise(function(resolve){
        setTimeout(() => {
            resolve("res")
        }, 2000);
    })
    
    console.log("Fetching data....")
    const data = await promise                              //  data is held untill the promise is setteled.
    
    console.log("Data fetched : " + data)                       //  when promise is setteled, the data is printed after the implied delay of 2s.
}


console.log("Welcome")                                  //  as this is synchronous, it is executed first while the async function's data was held for 2 seconds.

f()



//  An async function returns a promise by default....
//  all async functions are executed parallely....
//  using async we can write a asynchronous code in a synchronous way.
//  avoids callback hell.
//  error handling gets easier.
//  readability and maintainability gets improved.



