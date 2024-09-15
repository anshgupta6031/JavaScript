


for(var i=0; i<5; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

/* As the for loop is synchronous, it is executed first, and then the waiting asynchronous functon(setTimeout()) gets executed. */

