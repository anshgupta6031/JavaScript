



const nums = [1,2,3,4,5]

nums.forEach((num, index, nums) =>{             //  takes three parameters :- first is the element of the array, second is the index of the elements, and third is the passed array.
                                                //  traverses each element of the array.
    console.log(num, index)                     //  the space between num and index is applied automatically.....
    if(index == 2) num = 9

//    if(index == 2) break                      //  for each loop can not be broken, it always traverses each element.
//    if(index == 2) continue                   //  continue also can not be used inside a for each loop.
})

console.log(nums)                   //  original array does not get changed....


//  no new array is made.....








