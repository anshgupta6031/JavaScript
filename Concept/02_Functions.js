



greet()                                 //  we can also call before declaring the function.

function greet(){                       //  function keyword is used to declare a function.
    console.log("hello")
}

greet()                                 //  call....

console.log("\n")


//************************************************************************************************************************************************* */


function add(a, b){                     //  parameterised function.....
    return a+b
}

console.log(add(5,7))

console.log(add(5,7,8,6))           //  does not give error, passes first 2 arguments....
console.log(add(5))                 //  does not give error, returns NaN (Not a number)....

console.log("\n")


//*********************************************************************************************************************************************** */

/*  In JS functions are considered "1'st class citizens".
    i.e functions in js satisfy the following conditions :-

  1)  A function can be assigned to a variable.
  2)  A function can be passed as an argument to another function.
  3)  A function can be returned from a function.

  //    If any function follows points 2 and 3 it is called higher order function.

*/

//*********************************************************************************************************************************************** */

//  1)  A function can be assigned to a variable.

hello_func = function hello(){              //  a function can be directly assigned to a variable. i.e a variable can also store a function.
    console.log("hello dear")
    return
}

hello_func()                                //  variable to which the function is assigned is a function itself.

// console.log(hello())                     // this will give error as hello function is not defined, it is only assigned to a variable.

console.log(hello_func())                   //  variable to which the function is assigned is called as a function itself and printed.
                                            //  undefined also gets printed as the function hello() does'nt return anything which has to be printed.

console.log("\n")

//**************************************************************** */

hello_func2 = function (){              //  there is no need to write the assigned function's name.........     //  the assigned function is called annonymous function.
    console.log("hello dear")
    return
}

hello_func2()
console.log("\n")


//**************************************************************************************************************************************************************** */

//  2)  A function can be passed as an argument to another function.
//  the function which is passed to anothor function is called callback function...

function operate(a,b,fn){               //  A function as a parameter is recieved.
    console.log(fn(a,b))
}


function sum(a,b){
    return a+b
}


operate(5,6,sum)                    //  A function passed as an argument to another function.

console.log("\n")


//**************************************************************************************************************************************************************** */

//  3)  A function can be returned from a function.

function func1(){
    console.log("Outer")

    return function(){                               //  returning function does not require any name...
        console.log("Inner")

        return function(){
            console.log("Isko samajh k dikha ab...")
        }
    }
}


func1()()()                      //  inner most function is called with 3 ().
console.log()

func1()()
console.log()

func1()
console.log("\n")


//**************************************************************************************************************************************************************** */

//  In js, we can pass any no. of arguments even without any parameters and also can use them.


function sum2(){         //  this is a sum function which can add any no. of passed arguments.
    console.log(arguments)          //  using 'arguments' object we can get all the passed arguments along with their index.....
                                    //  'arguments' is an object which holds all the arguments.
    let s = 0
    for(i=0; i<arguments.length; i++){
        s += arguments[i]
    }

    console.log(s);
}

sum2(2,3,4)

console.log()

sum2(5,6,7,8,9)


//**************************************************************************************************************************************************************** */











