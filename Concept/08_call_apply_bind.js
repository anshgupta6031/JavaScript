



const person1 = {
    firstname : "Ansh",
    lastname : "Gupta",
}


const person2 = {
    fullname : function(city, country) {
        console.log(`${this.firstname} ${this.lastname} lives in ${city}, ${country}`)          //  everything within `` is a string except those in ${}.
    }
}


person2.fullname("Ayodhya", "India")                    //   As expected it is undefined....
console.log()

person2.fullname.call(person1, "Ayodhya", "India")                  //  using call method, the fields of person1 are accessed by person2.
                                                                    //  the arguments of the called function are also passed......
console.log()

person2.fullname.apply(person1, ["Ayodhya", "India"])                  //   apply method works same as call but the arguments of the called function are sent in the form of array.
console.log()


const abc = person2.fullname.bind(person1)                  //  now fields of person1 are bind to person2 and we can use abc as function to call the 'fullname' field.
abc("Delhi", "India")                               //  the arguments are passed in abc for the function which is bind to it.
abc("Washington", "USA")                            //  the function is now easy to access....
abc("Lucknow", "India")

console.log('\n')










