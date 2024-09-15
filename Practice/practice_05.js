//  another way of fixing practice_03......


for(var i=0; i<5; i++) {
    (function(local_i){
        setTimeout(() => {
            console.log(local_i)
        }, 1000)
    })(i)
}

/* wraping the timing function into another anonymous function makes the passed argument i local. */

