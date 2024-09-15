//  3)  setTimeout..........




function fetchDateFromAPI(){
    console.log("Fetching date from API at : ", new Date().toLocaleString())
}


setTimeout(fetchDateFromAPI, 5000)         //  first argument is the function to be called, and the second argument is the time delay in milliseconds to call the function.
                                           //  returns a timer id.....



//  Use case :- schedule download operation with delay.......