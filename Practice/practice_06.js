



let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1)
    }, 2000)
})


p1.then(()=>{
    console.log("Hurray")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 2000);
    })
}).then((value)=>{console.log(value)})



p1.then(()=>{
    console.log("Promise resolved...")
})



/*
    .then of line 12 and 24 run independently
    whereas the .then of line 20 executes when the .then of line 12 is executed....
*/

