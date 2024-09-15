//  Node.js is the runtime environment for JavaScript.

//  As JS is an interpreted / single thread language, there is no .exe file generated after compilation(which doesn't even happen at first place).
//  js is a dynamically typed language. that means the datatype of any variable can be changed in run time.


str = "Ansh"        //  we may or may not use any terminator(as ';' in c++) in JS when we declare only one variable in a line.

x = 25; y=64; str2 = "gupta";       //  for multiple variable declaration we have to use ';' as the terminator.

console.log("Hello \n World!")            //  function to print.....        //  '\n' escape sequence works good....

console.log(str)                        //  every printing function prints in a new line hence no next line character is required.

console.log(x,y,str2,"\n\n")                   //  we can print multiple things in a line like this....


//*******************************************************************************************************************************************/

//  Arithmatic operators........

var sum = x + y;                        //  'var' may or may not be used....
                                        /*  In js we can use 'var' or 'let' to declare any variable.
                                            using 'var' makes the variable globally accessable, whereas using 'let' makes the variable bounded within its scope.    */
console.log("sum = ",sum)

var difference = x - y
console.log("difference = ",difference)

var product = x * y
console.log("product = ",product)

var quotient = x / y
console.log("quotient = ",quotient)

var remainder = y % x
console.log("remainder = ",remainder)

var exponent = x ** y
console.log("exponent = ",exponent)

console.log("\n")

//***********************************************************************************************************************************************/

//  increment and decrement operators.......

i = 5
i++                                 //  post increment.....
console.log(i)
console.log(i--)                    //  post decrement.....
console.log(i)
console.log(++i)                    //  pre increment.....
console.log(--i)                    //  pre decrement.....

i += 5                              //  this works.....
console.log(i)
console.log("\n")

//***********************************************************************************************************************************************/

var sum = 7 + "Dhoni"               //  variable with same name can be redefined
console.log(sum)                    //  integer + string gives a concatenated string.

str = "ansh gupta"
console.log(str.toUpperCase())      //  converts the string to uppercase....
console.log("\n")


//**********************************************************************************************************************************************

//  Relational operators........

num1 = 50                   //  integer
num2 = "50"                 //  string

console.log(num1 == num2)           //  only compares the value
console.log(num1 === num2)          //  also compares the datatype along with the value.    //  It is called strict equality....
console.log(num1 <= num2)           //  only compares the value
console.log(num1 != num2)           //  only compares the value
console.log(num1 !== num2)          //  also compares the datatype along with the value.

console.log("\n")


//****************************************************************************************************************************************************/

//  Logical operators.........

a = 6                   //  true
b = 5                   //  true

console.log(a && b)     //  checks a, which is true. so does't go to check b, and prints a.
console.log(a || b)     //  checks a, which is true. then go to check b, which is also true. so prints b.

console.log(!b)         //  gives answer in true or false.

console.log("\n")

//************************************************************************************************************************************************************** */

//  bitwise operators........

a = 6                   //  0110
b = 5                   //  0101

console.log(a & b)
console.log(a | b)
console.log(a ^ b)
console.log(a << 2)
console.log(a >> 2)
console.log(~a)

console.log("\n")


//************************************************************************************************************************************************** */


a = 55
b = true
c = "kdjsnfksf"
e = 55.666


console.log(typeof a)       //  typeof tells the datatype of any variable.
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)       //  As d is not defined it's datatype is undefined.
console.log(typeof e)       //  Floating point is also considered number datatype.

console.log("\n")


//****************************************************************************************************************************************************** */

let num = 27                    //  just like 'var', 'let' can also be used to declare any variable.

console.log((num%2 == 0) ? "even" : "odd")              //  ternary operator and if, else if, else statement syntax is same as c++.
                                                        //  Switch-case statement syntax is also same as c++.
console.log("\n")

//***************************************************************************************************************************************************** */


for(j=0; j<5; j++){
    for(i=0; i<5; i++){                 //  for loop....(same as in c++)
        process.stdout.write("* ")      //  use this to avoid the automatic line change is done by console.log().
    }
    console.log()                       //  only console.log() is enough for changing the line...
}

//  while, do-while are also same as in c++.
//  we have 'for of' loop in js which works as for each of c++.
//  we also have a 'for in' loop in js which is same as the for loop.(can be used while dealing with objects...).

console.log("\n")


nums = [1,2,3,4,5]
nums.forEach(element =>{                   //  for each loop in js...
    console.log(element)
});

console.log("\n")





