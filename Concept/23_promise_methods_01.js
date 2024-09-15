//  case where all promises are resolved........



const promise1 = new Promise(function(resolve){
    setTimeout(() => {
        resolve("first")
    }, 1000);                                        //  success.....
})

const promise2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("second")
    }, 2000);                                        //  success......
})

const promise3 = new Promise(function(resolve){
    setTimeout(() => {
        resolve("third")
    }, 3000);                                        //  success.....
})



const all_promises = [promise1, promise2, promise3]


Promise.race(all_promises).then(res => console.log(res))            //  gives the value of the promise which is resolved first......
                                                                    //  if any of the promises is rejected it gives an error....


Promise.all(all_promises).then(res => console.log(res))             //  returns the array of all the values resolved by all the promises when all the promises are resolved i.e. in this case 3 seconds......


