




const promise = new Promise(function(resolve, reject){              //  a promise is created which takes two callback functions - resolve and reject.
    console.log("start loading.")

    if(Math.random() > 0.5){
        resolve({city : "Delhi", Temperature : 45})                 //  if the API is successfully executed, the data is delt by the resolve function...
    }

    else{
        reject({code : 404, message : "Data not found"})          //  if the API is not successfully executed, the error is delt by the reject function...
    }
})




//  promise methods......


promise.then(response => console.log(response))             //  .then is used to access the data of the resolve function. therefore it is only executed if the API is successfully executed.

promise.catch(error => console.log(error))                 //  .catch is used to access the data of the reject function. therefore it is only executed if the API execution is unsuccessfull.

promise.finally(() => {                                    //   .finally is used to execute the furthur data processing after the API call.
    console.log("Stop loading.")
})



//  As then, catch and finally also return the same data which they got from the API call, they can be chained as follows.....

promise.then(response => console.log(response)).catch(error => console.log(error)).finally(() => {console.log("Stop loading.")})




/*
        Use cases of promises :-

    1)  callback hell problem can be solved using promises.
    2)  Improves the code readability and makes it easy to maintain.
    3)  errors can be detected and delt with.
    4)  can be used to work with a non blocking aproach as it is asynchronous.

*/








