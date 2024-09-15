//  IIFE stands for 'Immediately Invoked Function Expressions'.



let f = ()=>{
    console.log("xyz")
}

f();




(()=>{                                      //  same as above......
    console.log("xyz")
})()                                        //  this function is immediately called as the program is executed......



