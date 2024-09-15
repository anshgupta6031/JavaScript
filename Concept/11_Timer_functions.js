/*
    There are four timer functions in js :-

    1)  setInterval     ->    Calls the given function repetedly after a given time interval.
    2)  clearInterval   ->    stops the passed setInterval function.
    3)  setTimeout      ->    Calls the given function once after a given time delay.
    4)  clearTimeout    ->    stops the passed setTimeout function once and for all.
*/

//  All the timing functions are asynchronous. i.e they do not have any definite time of execution, they can wait for execution and can be executed later.
//  the order of execution in js is :- synchronous functions followed by the completed asynchronous functions.


//  1)  setInterval........


function fetchDateFromAPI(){
    console.log("Fetching date from API at : ", new Date().toLocaleString())
}


setInterval(fetchDateFromAPI, 1000)         //  first argument is the function to be called, and the second argument is the time interval of repeated calls in milliseconds.





