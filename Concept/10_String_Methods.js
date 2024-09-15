//  NOTE :- In JS, strings are immutable, which means that once a string is created , it cannot be changed.
//  Whenever you perform any string operations, a new string is created rather than modifying the original string.



firstname = "ansh"
fullname = firstname.concat(" guPta")       //  concatenation of strings....
console.log(fullname)
console.log(fullname.length)                //  gives the length of string....
console.log()

fullname[0] = "P"                           //  the string does not change, as strings are immutable...
console.log(fullname)
console.log()

console.log(fullname.at(0))                 //  takes the index and returns the character at that index.
console.log(fullname.at(-5))                 //  also takes the -ve index.
console.log()

console.log(fullname.charAt(0))              //  takes the index and returns the character at that index. Doesn't take -ve indices.
console.log(fullname[0])                    //  works same as charAt().
console.log()

console.log(fullname.endsWith("pta"))       //  checks if the string ends with the passed argument.
console.log(fullname.endsWith("h", 4))      //  checks if the sub string consisting of starting 4 characters ends with the passed argument.

console.log(fullname.startsWith("a"))       //  checks if the string starts with the passed argument.
console.log(fullname.startsWith(" gu", 4))      //  checks if the sub string after starting 4 characters starts with the passed argument.
console.log()

console.log(fullname.includes("z"))             //  checks if the string includes the passed argument.
console.log(fullname.includes("sh", 2))         //  now, the searching starts from the second argument's index.
console.log()

console.log(firstname.padStart(10, "."))        //  first argument is the length to be made by filling second argument at the start.
console.log(firstname.padEnd(10, "."))          //  first argument is the length to be made by filling second argument at the end.
console.log()

console.log(firstname.repeat(5))
console.log()

console.log(fullname.replace("a", "k"))             //  replaces only the first occurance...
console.log(fullname.replaceAll("a", "k"))         //  replaces all occurances...
console.log()

console.log(firstname.search("s"))               //  gives the index of the first occurance of the passed character.
console.log(firstname.search("z"))               //  returns -1 if it does not exist.

console.log(firstname.indexOf("s"))               //  gives the index of the first occurance of the passed character.
console.log(firstname.indexOf("s", 3))            //  searching starts from the second argument's index. // second argument can also be -ve and it searches backwards.
console.log()

console.log(fullname.slice(2, 7))               //  same as in array...
console.log(fullname.substring(2, 7))           //  same as slice(), but cannot give -ve index...
console.log(fullname.substr(2, 7))           //  strats from first argument's index and takes no. of characters equal to the second argument.
console.log()

console.log(fullname.split("sh"))            //  splited into parts about the passed character/substring. The passed character/substring also gets removed.
console.log()

console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())
console.log()

console.log(fullname.toLowerCase() === fullname)            //  this is how we can check if the string is in lower case or not...
console.log(fullname.toUpperCase() === fullname)            //  this is how we can check if the string is in upper case or not...
console.log()

str = "   GURU     GUPTA        "
console.log(str.trimStart())                //  removes starting extra spaces.
console.log(str.trimEnd())                //  removes ending extra spaces.
console.log(str.trim())                //  removes starting and ending extra spaces.






