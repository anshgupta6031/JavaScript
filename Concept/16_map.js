



const nums = [1,2,3,4,5]

const new_nums = nums.map((num, index, nums) =>{             //  takes three parameters(same as forEach()) :- first is the element of the array, second is the index of the elements, and third is the passed array.
                                                            //  traverses each element of the array.
    return num * 2                                          //  returning is necessary....

//    if(index == 2) break                              //  break can not be used inside map.
//    if(index == 2) continue                           //  continue also can not be used inside map.
})

console.log(new_nums)


//  a new array is made and returned.....
//  original array does not get changed....





