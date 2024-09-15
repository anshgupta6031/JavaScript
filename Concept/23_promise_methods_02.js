//  case where some promises are rejected........



const promise1 = new Promise(function(resolve){
    resolve("first")                                        //  success.....
})

const promise2 = new Promise(function(resolve, reject){
    reject("second")                                        //  failed......
})

const promise3 = new Promise(function(resolve){
    resolve("third")                                        //  success.....
})


const promise4 = Promise.resolve("fourth")                  //  an already successufull/resolved promise is created.
promise4.then(res => console.log(res))


const promise5 = Promise.reject("fifth")                  //  an already unsuccessufull/rejected promise is created.
promise5.catch(res => console.log(res))




const all_promises = [promise1, promise2, promise3]

Promise.all(all_promises).catch(res => console.log(res))          //   here, .all takes all the promises and if any of the promise is rejected, .then can not be used with it and using .catch gives the unsuccessfull promise's data.
//  Promise.all(all_promises).then(res => console.log(res))          //   so, this will give error.


Promise.allSettled(all_promises).then(res => console.log(res))      //  gives an array of all the promises with their status and resolved values.....


Promise.any(all_promises).then(res => console.log(res))           //    here, .any deals with the first successfull promise's data. therefore .then is used with it in order to acces the data as it is successfull.
                                                                  //    if no, promise is resolved, it gives an error....





