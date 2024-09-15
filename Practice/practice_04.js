


for(let i=0; i<5; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

/* Just using let instead of var fixed it as, using let makes the scope of i limited to the loop, so a stack is made where the values at the corresponding time are stored and printed later in order. */

