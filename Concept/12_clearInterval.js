//  2)  clearInterval........




let count = 10;


const countDown = () =>{
    console.log(count--)
    
    if(count == 0){
        clearInterval(timer)            //  stops the setInterval function with the passed timer id....
    }
}


const timer = setInterval(countDown, 1000)              //  returns a timer id.....




//  Use cases :- implementing a count down as shown above.....