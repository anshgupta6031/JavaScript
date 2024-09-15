//  Arrow function is a relatively newer version of js.....
//  We use them if we want to write less.


const add = (a,b) =>{                           //  Arrow function.....
    console.log("Inside the add function.")
    return a+b
}

console.log(add(5,6))
console.log('\n')



const sum = (a,b) => a+b                    //  if there is only one statement we can remove '{}'. and if we want the value to be returned, we can also remove the 'return' keyword.

console.log(sum(5,6))
console.log('\n')



/*
    Limitations of arrow functions :-

    1)  Can't access the 'arguments' object, therefore cannot have variable no. of arguments.
    2)  No prototype property.
    3)  Can't be used with(as constructors) new keyword.
    4)  Binding of 'this' is different.
*/





