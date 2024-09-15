



const nums = [1,2,3,4,5]

const total = nums.reduce((accumulator, num, index, nums) =>{       //  takes four parameters(same as forEach()) :- first is the accumulator which stores the result after each itteration. rest all parameters are same as forEach loop.
    return accumulator + num
}, 0)                                                               //  the second parameter of reduce itself is the initial value in the accumulator.
                                                                    //  if we do not give any initial value in the accumulator then the first value(of first itteration) is automatically assumed as the initial value for the accumulator.


console.log(total)

console.log(nums)


//  original array does not get changed....




