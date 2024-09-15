//  4)  clearTimeout..........




const fetchDateFromAPI = setTimeout(function(){
    console.log("Fetching date from API at : ", new Date().toLocaleString())
}, 2000)


clearTimeout(fetchDateFromAPI)          //  the timeout function is stoped before it executes.......
                                        //  as the timeout function is executed only once it has to be cleared before execution.

console.log("Timeout cleared.....")




//  use case :- rate limiting/debouncing (calls for defenite amount of time can be cleared).