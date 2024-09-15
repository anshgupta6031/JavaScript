//  apply these methods in chrome dev tools console for better understanding....



//  console.log(window)        //  window is a global object which represents browser window and provides all the methods to control it.....
console.log('\n')


console.log(console)        //  shows all console object's methods......
console.log('\n')


console.error("Error detected!!!")
console.log('\n')


console.warn("STEP BACK THIS IS A WARNING!!!")
console.log('\n')


console.info("NOTE : DO NOT SKIP THIS PART!!!")
console.log('\n')


console.assert(5 > 6)               //  if the condition gives false, the assertion failed message comes in the console.
console.assert(5 < 6)               //  if the assertion is true, nothing happens....
console.log('\n')


//  console.clear()                 //  clears the console.....


obj = {a : 1, b : 2, c : 3}
console.table(obj)                  //  shows the object in a tabular form.....
console.log('\n')




console.time("for loop")                //  timer starts here.....

for(let i=0; i<100; i++){
    process.stdout.write("*")
}
console.log()

console.timeEnd("for loop")             //  timer ends here and the time period is printed....

//  Note: for this to work the string passed in both (.time and .timeEnd) must be the same.....











