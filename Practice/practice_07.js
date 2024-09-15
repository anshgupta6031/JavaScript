//  Q) Write a function that fetches data from two different APIs concurrently using Promises. Handle errors for each API call independently.





const fetchData = (url) =>{
    return new Promise(function(resolve, reject){
        setTimeout(() => {

            if(Math.random() > 0.5) resolve(`api data`)
            else reject(new Error(`custom error :  ${url}`))

        }, 1000);
    })
}


Promise.all([fetchData("url1"), fetchData("url2")])
       .then((res) => {console.log(res)})
       .catch((error) => {console.log(error)})




