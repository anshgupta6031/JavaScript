



arr = [3,4,5]
console.log(arr)
console.log(arr.length)
console.log('\n')

console.log(arr.pop())                      //  pops and returns the last element....
console.log(arr)
console.log('\n')

arr.push(9)                                 //  pushes the given element at the back....
console.log(arr)
console.log(arr.push(2))                 //  returns the length of the array after pushing.
console.log(arr)
console.log('\n')

console.log(arr.shift())                    //  pops and returns the first element....
console.log(arr)
console.log('\n')

arr.unshift(2)                              //  pushes the given element at the front....
console.log(arr)
console.log(arr.unshift(2))                 //  returns the length of the array after pushing.
console.log(arr)

console.log('\n\n')

/**************************************************************************************************************************************************************** */

arr1 = [3,4,5]
arr2 = [6,7,8]

arr3 = arr1.concat(arr2)                    //  concatenation of 2 arrays......
console.log(arr3)
console.log()

arr_new = arr1 + arr2                    //  adds them as a string.....
console.log(arr_new)
console.log(typeof arr_new)
console.log('\n\n')

/**************************************************************************************************************************************************************** */

abc = [1,2,3,4,5]

console.log(abc.join())                     //  returns the joined elements as string....
console.log(abc.join("-"))                     //  returns the joined elements as string saparated by passed character.....
console.log('\n')

str = abc.toString()                        //  returns the array as string.
console.log(str)
console.log(typeof abc)                     //  type of an array in js is object....
console.log('\n')


console.log(abc.slice(1,4))                //  returns the sliced array from the first passed index to the second passed index - 1.
                                            //  does not alter the original array.
console.log(abc.slice())                    //  returns the entire array.
console.log(abc.slice(2))                    //  returns the array from the passed index to the last.
console.log(abc.slice(1,4,2,3))                    //  only the starting 2 argumnents are considered.
console.log(abc.slice(-1))                    //  returns the last element. 
                                            //  -1 based indexing can be done from the end of the array in order to use slice function in the form of end.
console.log('\n')

/**************************************************************************************************************************************************************** */

nums = [1,2,3,4,5,6]

nums.splice(3,2)                        //  second argument is the 'no. of elements' which will get removed after the 'first argument's index'.
console.log(nums)                       //  it modifies the given arrayand returns the array of deleted elements....
console.log()

nums.splice(1,2,9,8)                        //  arguments after the second argument are the numbers which will get inserted after the first argument's index(after removal).
console.log(nums)
console.log('\n')

/**************************************************************************************************************************************************************** */

pqr = [1,2,3,4,5]
console.log(pqr)
console.log(pqr.reverse())                  //  reverses the array and returns it....
console.log(pqr)                            //  original array gets changed.
console.log()

console.log(pqr.sort())                     //  sorts the array and returns it....
console.log(pqr)                            //  original array gets changed.
console.log()

pqr.sort((a,b)=> b-a)                     //  sorted on the basis of the passed custom comparator....
console.log(pqr)
console.log()
console.log('\n')


xxx = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

xxx.sort()                  //  by default it sorts the numbers in lexographically. therefore it is suggested to pass a custom coparator function so that it works as desired.
console.log(xxx)
console.log()

xxx.sort((a,b)=> a-b)
console.log(xxx)

console.log('\n')

/**************************************************************************************************************************************************************** */

arr = [1,2,3,[4,5,6,[7,8,[9,10]]]]

flat_arr = arr.flat()                   //  returns the 1 level flatened array.
console.log(flat_arr)
console.log(arr)                        //  original array does not change.

console.log(arr.flat(2))                   //  returns the 'passed' level flatened array.
console.log('\n')


console.log(Array.isArray(arr))         //  this is how we check if the data structure is an array or not.












